import Mongoose from 'mongoose'

const eventsSchema = new Mongoose.Schema({
  eventPostId: String,
  referenceUserId: String,
  DateTime: String,
  imageUrl: String,
  eventText: String

});

const Event = Mongoose.model('Event', eventsSchema);

module.exports = Event;
