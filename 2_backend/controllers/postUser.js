import User from '../models/userModel.js';

const postUser = (req, res) => {
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
};

export default postUser;
