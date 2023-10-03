const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const now = new Date();
const day = now.toLocaleDateString();

const mealSchema = new Schema({
  // User: {type: String},
  Description: { type: String},
  Calories: { type: Number },
  Protein: { type: Number },
  Fats: { type: Number },
  Carbs: { type: Number },
  Fiber: { type: Number },
  when: { type: String, default: `${day}` },
}, {
    timestamps: true,
});




const Meal = mongoose.model('Meal', mealSchema);

module.exports = Meal;