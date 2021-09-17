import User from '../models/userModel.js';

const deleteUser = (req, res) => {
  let userId = req.params.id;

  User.findByIdAndDelete(userId)
    .then((data) => res.json({ message: 'User deleted!' }))
    .catch((err) => console.log(err));
};

export default deleteUser;
