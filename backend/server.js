require('dotenv').config({ debug: true })

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.model'); // Adjust the path as needed


const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");


const app = express();
const port = process.env.PORT || 5000;

//app.use(cors());
app.use(express.json());
let DB = []

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: "GET,POST,PUT,DELETE,OPTIONS",
  })
);

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const client = new OAuth2Client(GOOGLE_CLIENT_ID);

async function verifyGoogleToken(token) {
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: GOOGLE_CLIENT_ID,
    });
    return { payload: ticket.getPayload() };
  } catch (error) {
    return { error: "Invalid user detected. Please try again" };
  }
}

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

app.post('/signup', async (req, res) => {
  try {
    res.set('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
    // console.log({ verified: verifyGoogleToken(req.body.credential) });
    if (req.body.credential) {
      const verificationResponse = await verifyGoogleToken(req.body.credential);
      if (verificationResponse.error) {
        return res.status(400).json({
          message: verificationResponse.error,
        });
  }
      const profile = verificationResponse?.payload;
      //create new user from profile
      const newUser = new User({
        firstName: profile?.given_name,
        lastName: profile?.family_name,
        email: profile?.email,
      });

      //Save new User
      await newUser.save();
      
      res.status(201).json({
        message: "Signup was successful",
        user: {
          firstName: profile?.given_name,
          lastName: profile?.family_name,
          picture: profile?.picture,
          email: profile?.email,
          token: jwt.sign({ email: profile?.email }, "myScret", {
            expiresIn: "1d",
          }),
        },
      });
      
    }
  } catch (error) {
    res.status(500).json({
      message: "An error occurred. Registration failed.",
    });
  }

})
app.post("/login", async (req, res) => {
  try {
    res.set('Cross-Origin-Opener-Policy', 'same-origin-allow-popups');
    if (req.body.credential) {
      const verificationResponse = await verifyGoogleToken(req.body.credential);
      if (verificationResponse.error) {
        return res.status(400).json({
          message: verificationResponse.error,
        });
      }

      const profile = verificationResponse?.payload;

      const existsInDB = DB.find((person) => person?.email === profile?.email);

      if (!existsInDB) {
        return res.status(400).json({
          message: "You are not registered. Please sign up",
        });
      }

      res.status(201).json({
        message: "Login was successful",
        user: {
          firstName: profile?.given_name,
          lastName: profile?.family_name,
          picture: profile?.picture,
          email: profile?.email,
          token: jwt.sign({ email: profile?.email }, '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', {
            expiresIn: "1d",
          }),
        },
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error?.message || error,
    });
  }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});