const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const now = new Date();
const day = now.toLocaleDateString();

const mealSchema = new Schema({
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


const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;