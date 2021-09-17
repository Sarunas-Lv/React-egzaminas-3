// Imports
import cors from 'cors';
import colors from 'colors';
import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';
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
app.listen(PORT, () =>
  console.log(`Server is running on port: ${PORT}`.yellow.underline)
);
