const Meal = require('../models/meal.model');

// Controller function to get all meals
const getAllMeals = async (req, res) => {
  try {
    const meals = await Meal.find();
    res.json(meals);
  } catch (error) {
    res.status(400).json('Error: ' + error);
  }
};

//add a new meal
const addMeal = async (req, res) => {
  const Description = req.body.Description;
  const Calories = req.body.Calories;
  const Protein = req.body.Protein;
  const Fats = req.body.Fats;
  const Carbs = req.body.Carbs;
  const Fiber = req.body.Fiber;
  
  //need to match the meal with the correct user in the database
//   const user = await User.findOne({ email: userEmail });
//   if (!user) {
//     return res.status(404).json('User not found'); // Return an error if the user doesn't exist
//   }
    console.log(req.body)
  const newMeal = new Meal({
    Description,
    Calories,
    Protein,
    Fats,
    Carbs,
    Fiber,
  });
     
  
    
  try {
    await newMeal.save();
    res.json('Meal added!');
  } catch (error) {
    res.status(400).json('Error: ' + error);
  }
};

//Other funcs
// const findMeal (req, res) => {

//   Meal.findById(req.params.id)
//     .then(meal => res.json(meal))
//     .catch(err => res.status(400).json('Error: ' + err));
// };
// router.route('/:id').delete((req, res) => {
//   Meal.findByIdAndDelete(req.params.id)
//     .then(() => res.json('Exercise deleted.'))
//     .catch(err => res.status(400).json('Error: ' + err));
// });
// router.route('/update/:id').post((req, res) => {
//   Meal.findById(req.params.id)
//     .then(meal => {
//       meal.username = req.body.username;
//       meal.description = req.body.description;
//       meal.duration = Number(req.body.duration);
      
//       meal.save()
//         .then(() => res.json('Meal updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = {
  getAllMeals,
  addMeal,
  // Export other controller functions here
};
