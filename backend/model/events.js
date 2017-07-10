import Mongoose from 'mongoose'

const eventsSchema = new Mongoose.Schema({
  eventPostId: String,
  referenceUserId: String,
  DateTime: String,
  imageUrl: String,
  eventText: String

});

const events = Mongoose.model('Event', eventsSchema);

module.exports = Event;
