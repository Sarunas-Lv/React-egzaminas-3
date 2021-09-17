import mongoose from 'mongoose';
import colors from 'colors';
import User from './models/userModel.js';
import dotenv from 'dotenv';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((response) => {
    let user = [
      {
        name: 'Antanas Baranauskas',
        age: 186,
        email: 'silelis@anyksciai.lt',
        password: '123456789',
      },
      {
        name: 'Jonas Mačiulis',
        age: 159,
        email: 'maironis@baznycia.lt',
        password: '123456789',
      },
      {
        name: 'Salomėja Nėris',
        age: 117,
        email: 'upepaslaptinga@gmail.com',
        password: '123456789',
      },
      {
        name: 'Vytautas Mačernis',
        age: 100,
        email: 'vizijos@sarnele.lt',
        password: '123456789',
      },
      {
        name: 'Šarūnas Levickas',
        age: 22,
        email: 'sarunas.levickas@gmail.com',
        password: '123456789',
      },
    ];

    User.insertMany(user);

    console.log('Data was sent to MongoDB'.blue);
  });
