const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {type: String},
  firstName: {type: String},
  lastName: {type: String},
  email: {type: String,required: true, unique: true},
  picture:{type: String},
  createdAt: {type: Date, default: Date.now}
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;