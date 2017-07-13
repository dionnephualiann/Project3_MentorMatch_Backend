import express from 'express';
import Profile from '../model/profile';

const router = express.Router();
import {postSignup} from './auth';
import passportConfig from '../config/passport';

/*
*  Create Profile
*/
router.post('/', postSignup, (req,res,next) => {
 console.log(req.body)
  const profile = new Profile();
  profile.user = req.user;
  profile.url = null;

  profile.jobTitle = req.body.jobTitle || "unknown";
  profile.jobDescription = req.body.jobDescription || "unknown";
  profile.skillSet = req.body.skillSet || "unknown";
  profile.save((err, profile) => {
       res.json(profile);
   });
});



/*
*  Read Profile
*/
router.get('/:id', passportConfig.isAuthenticated, (req,res,next) => {

  const id = req.params.id;
  if(id === "me"){

    Profile.findOne({user: req.user.id}).populate("user", "name").exec(function(err, profile){
      if (err) return res.status(404).send('Not found');
      res.json(profile);
    })
  } else {
    Profile.findById(id).populate("user", "name").exec(function(err, profile){
      if (err) return res.status(404).send('Not found');
      res.json(profile)

    });
  }
});


export default router;
