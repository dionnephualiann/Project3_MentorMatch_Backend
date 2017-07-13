import mongoose from 'mongoose'

const eventsSchema = new mongoose.Schema({
  postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  date: Date,
  // imageUrl: String,
  text: String

});

const Event = mongoose.model('Event', eventsSchema);

module.exports = Event;
