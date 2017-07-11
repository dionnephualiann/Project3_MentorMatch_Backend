import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  url: String,
  name: String,
  jobTitle: String,
  jobDescription: String,
  skillSet: String
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
