import User from '../models/userModel.js';

const getUsers = (req, res) => {
  User.find()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
};

export default getUsers;
