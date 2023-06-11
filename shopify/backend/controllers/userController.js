const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')

module.exports = {
  addUser: (req, res) => {
    var hash = bcrypt.hashSync(req.body.password, 10);
    req.body.password = hash;
    const user = new User(req.body);
    user
      .save()
      .then(() => res.status(200).json({ message: "success" }))
      .catch((err) => console.log(err));
  },

  login: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(400).json("username invalid");
    }

    bcrypt.compare(req.body.password, user.password).then((isMatch) => {
      if (!isMatch) { // false
        return res.status(400).json({ email: "passsword not equals" });
      } else {
        const token = jwt.sign(
          {
            data: {
              id: user._id,
              email: user.email,
              role: user.role,
            },
          },
          process.env.cle,
          { expiresIn: "1h" }
        );
        res.status(200).json({
          message: "success",
          token: token,
          user : user
        });
      }
    });
  },

  deleteUser: (req, res) => {
    User.findByIdAndDelete({ _id: req.params.id }, (err, user) => {
      if (err) {
        res.status(500).json("error delete user");
      } else {
        res.status(200).json("user successfuly deleted");
      }
    });
  },

  updateUser: (req, res) => {
    User.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true },
      (err, user) => {
        if (err) {
          res.status(500).json("error update user");
        } else {
          res.status(200).json(user);
        }
      }
    );
  },

  getUsers: (req, res) => {
    User.find({}, (err, users) => {
      if (err) {
        res.status(500).json("error getting users");
      } else {
        res.status(200).json(users);
      }
    });
  },
};
