import express from 'express';
import Event from '../model/events';

const router = express.Router();


/*GET Events Page*/

router.get('/', (req,res,next) =>{
  console.log("Request for Events page");

  Event.find().populate("postedBy", "name").exec(function (err, event) {
    if(err) return res.status(404).send('Not found');
    res.json(event);
  });
});

/*Create Event*/

router.post('/', (req,res,next) => {

  const event = new Event();

  event.postedBy = req.user || "Unknown";
  event.date = new Date() || "unknown";
  event.text = req.body.text || "Unknown";
  //add multer here//
  event.save((err, event) => {
       res.json(event);
   });
});

/*Read event*/

router.get('/:id', (req,res,next) => {

  const id = req.params.id;
  Event.findById(id, (err, event) => {
    if (err) return res.status(404).send('Not found');
    res.json(event);
  });
});

export default router;
