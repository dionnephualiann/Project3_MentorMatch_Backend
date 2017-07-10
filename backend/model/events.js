import Mongoose from 'mongoose'

const eventsSchema = new Mongoose.Schema({
  // postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  date: Date,
  // imageUrl: String,
  text: String

});

const Event = Mongoose.model('Event', eventsSchema);

module.exports = Event;
