import User from '../models/userModel.js';

const putUser = (req, res) => {
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
};

export default putUser;
