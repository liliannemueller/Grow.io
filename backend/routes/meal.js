const router = require('express').Router();
const mealController = require('../controllers/mealController')


router.route('/').get(mealController.getAllMeals);

//add AUTH MIDDLEWARE HERE 
router.route('/add').post(mealController.addMeal);

module.exports = router;