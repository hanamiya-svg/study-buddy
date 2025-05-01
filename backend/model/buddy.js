import mongoose from 'mongoose';

const buddySchema = new mongoose.Schema({
  id: Number,
  name: String,
  title: String,
  buddy: Number,
  rating: Number,
  bio: String,
  studentid: String,
});

const Buddy = mongoose.model('Buddy', buddySchema);

export default Buddy;
