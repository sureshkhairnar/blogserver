const { result } = require("lodash");
const _ = require("lodash");

const { encrypt } = require("../../helpers/encryption");
const UserModel = require("../models/user.model");

class UserCtrl {
  static pickUser(user) {
    return _.pick(user, ["_id", "name", "mobile", "email", "status", "role"]);
  }

  static createUser(req, res) {
    const user = req.body;

    console.log("user", user);

    if (user.password) user.password = encrypt(user.password);

    new UserModel(user)
      .save()
      .then((result) => {
        res
          .status(201)
          .send({ message: "User created", data: UserCtrl.pickUser(result) });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: "User not created", error: err });
      });
  }
}

module.exports = UserCtrl;
