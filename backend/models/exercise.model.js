const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const now = new Date();
const day = now.toLocaleDateString();




const exerciseSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  when: { type: String, default: `${day}` },
}, {
    timestamps: true,
});

// console.log(typeof day)


const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;