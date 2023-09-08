const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const now = new Date();
const day = now.toLocaleDateString();

const nutritionSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  Calories: { type: Number },
  Protein: { type: Number },
  Fats: { type: Number },
  Carbs: { type: Number },
  Fiber: { type: Number },
  when: { type: String, default: `${day}` },
}, {
    timestamps: true,
});

// console.log(typeof day)


const Nutrition = mongoose.model('Nutrition', nutritionSchema);

module.exports = Nutrition;