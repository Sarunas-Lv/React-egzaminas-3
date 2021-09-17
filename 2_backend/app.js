// Imports
import cors from 'cors';
import colors from 'colors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

// Model Imports
import User from './models/userModel.js';

// Controllers Imports
import deleteUser from './controllers/deleteUser.js';
import getUsers from './controllers/getUsers.js';
import putUser from './controllers/putUser.js';
import postUser from './controllers/postUser.js';

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
app.get('/api/users', getUsers);

// POST: create new user
app.post('/api/users/signup', postUser);

// PUT
// -- update single user based on ID
app.put('/api/users/:id', putUser);

// DELETE: Delete single user based on it's id
app.delete('/api/users/delete/:id', deleteUser);

// --------------------------------------------------------------------
// REST API
/*
GET:     /api/users             | Get all users

POST:    /api/users/signup      | Create new user

PUT:     /api/users/:id'        | Update single car based on 

DELETE:  /api/users/delete/:id   | Delete single user based on it's id
*/
//---------------------------------------------------------------------
