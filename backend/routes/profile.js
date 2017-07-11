import express from 'express';
import Profile from '../model/profile';

const router = express.Router();

/*
*  Create Profile
*/
router.post('/', (req,res,next) => {

  const profile = new Profile();
  // profile.user =
  profile.url = null;
  profile.name = req.body.name || "unknown";
  profile.jobTitle = req.body.jobTitle || "unknown";
  profile.jobDescription = req.body.jobDescription || "unknown";
  profile.skillSet = req.body.skillSet || "unknown";
  //add multer here//
  profile.save((err, profile) => {
       res.json(profile);
   });
});



/*
*  Read Profile
*/
router.get('/:id', (req,res,next) => {

  const id = req.params.id;
  Profile.findById(id, (err, profile) => {
    console.log(id);
    if (err) return res.status(404).send('Not found');
    res.json(profile);
  });
});


export default router;
