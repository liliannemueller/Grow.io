require('dotenv').config({ debug: true })

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');



const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = process.env.REACT_APP_URI


mongoose.connect(uri, { }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');
const mealRouter = require('./routes/meal')

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);
app.use('/meals', mealRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});