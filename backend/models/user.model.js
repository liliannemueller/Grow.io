const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {type: String},
  lastName: {type: String},
  picture: {type: String},
  email: {type: String,required: true, unique: true},
  createdAt: {type: Date, default: Date.now}
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;