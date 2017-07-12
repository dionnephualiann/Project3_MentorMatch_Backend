import express from 'express';
import passport from 'passport';
import User from '../model/User';

const router = express.Router();


/**
 * POST /login
 * Sign in using email and password.
 */
router.post('/login', function(req, res, next) {
  console.log(req.assert);
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('password', 'Password cannot be blank').notEmpty();
  req.sanitize('email').normalizeEmail({ remove_dots: false });
  const errors = req.validationErrors();

  if (errors) {
  //  req.flash('errors', errors);
   return res.json({redirect: '/login'});
 }

    passport.authenticate('local', function(err, user, info) {
        if (err) { return next(err); }
        if(!user) {
            // req.flash('errors', info);
            return res.json({redirect: '/login'});
          }

        req.logIn(user, function(err) {
          if (err) { return next(err); }
            // req.flash('success', { msg: 'Success! You are logged in.' });
            return res.json({redirect: '/'});
          });
    })(req, res, next);
});

/**
 * GET /logout
 * Log out.
 */
router.get('/logout', function(req, res) {
  req.logout();
  return res.json({redirect: '/login'});
})


export const postSignup = function(req, res, next) {
  console.log(req.body);
    User.findOne({ email: req.body.email }, (err, existingUser) => {

      console.log("Data: ",req.body.email, req.body.password)

      if (existingUser) {
          return res.json({'error':'login','message': 'This email already exists!'});
      }

      console.log("New user");

      let user = new User();
      user.email = req.body.email;
      user.password = req.body.password;
      user.save((err) => {
        if (err) {
          console.log("User save error");
          return res.json({'error':'database','message': err});
        }
        req.logIn(user, (err) => {
        if (err) {
            console.log("User login error");
            return res.json({'error':'login','message': err});
        }
        console.log("User login success");
        next();
        });
      });
    });
};



export default router;
