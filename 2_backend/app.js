// Imports
import cors from 'cors';
import colors from 'colors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

// Model Imports
import User from './models/userModel.js';

// Starters
dotenv.config();

// Variables
const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json());

// Starting server
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log(`Connected to MongoDB`.green.underline);
    // starting server
    app.listen(PORT, () =>
      console.log(`Server is running on port: ${PORT}`.yellow.underline)
    );
  });

// ROUTES
app.get('/', (req, res) => res.send('Third exam API is running...'));

// GET all users
app.get('/api/users', (req, res) =>
  res.send(User.find({}).then((data) => res.json(data)))
);

// POST: create new user
app.post('/api/users/signup', (req, res) => {
  // Variables
  let user = req.body;

  User.find().then((result) => {
    // Email validation
    // Variables
    const userExists = result.some(
      (userFromDB) => userFromDB.email === user.email
    );

    // Validation logic
    if (userExists) {
      res.json({
        registrationStatus: 'failed',
        message: 'User with given email already exists',
      });
    } else {
      const newUser = new User(user);

      newUser.save().then((result) => {
        res.json({
          registrationStatus: 'success',
          message: 'New user created',
        });
      });
    }
  });
});

// PUT
// -- update single user based on ID
app.put('/api/users/:id', (req, res) => {
  // -- validation for user inputs
  if (
    !req.body.name ||
    !req.body.age ||
    !req.body.email ||
    !req.body.password
  ) {
    res.status(400).json({ message: 'All fields are required' });
    return;
  }
  // -- if valdiation passes, updating user
  let userId = req.params.id;

  User.findByIdAndUpdate(userId, req.body)
    .then((data) => res.json({ message: 'User updated!' }))
    .catch((err) => console.log(err));

  res.end();
});

// DELETE: Delete single user based on it's id
app.delete('/api/users/delete/:id', async (req, res) => {
  // Variables
  const userId = req.params.id;

  const deletedUser = await User.findByIdAndDelete(userId);

  const user = await User.findById(deletedUser.userId);

  res.json({ ...user.toObject() });
});
// --------------------------------------------------------------------
// REST API
/*
GET:     /api/users             | Get all users

POST:    /api/users/signup      | Create new user

PUT:     /api/users/:id'        | Update single car based on 

DELETE:  /api/users/delete/:id   | Delete single user based on it's id
*/
//---------------------------------------------------------------------
