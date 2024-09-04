const _ = require("lodash");
const UserModel = require("../models/user.model");
const { compareHash } = require("../../helpers/encryption");
const { createToken, verifyToken } = require("../../helpers/middlewares/token");
const UserCtrl = require("./user.controller");

class AuthCtrl {
  static userLogin(req, res) {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
      .then((result) => {
        if (!result) throw new Error("Invalid Credentials");
        else if (compareHash(password, result.password)) {
          const accessToken = createToken(
            {
              _id: result._id,
            },
            60 * 20
          );
          const refreshToken = createToken(
            {
              _id: result._id,
            },
            60 * 60
          );
          res.set("x-access-token", accessToken);
          res.set("x-refresh-token", refreshToken);

          res.status(200).send({
            message: "Login successful",
            data: UserCtrl.pickUser(result),
          });
        } else {
          res.status(401).send({ message: "Invalid Credentials" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(404).send({ message: "Invalid Credentials" });
      });
  }

  static validateToken(req, res) {
    const token = req.headers.authorization;
    const payload = verifyToken(token);

    if (payload?._id) {
      const { _id } = payload;

      UserModel.findOne({ _id })
        .then((result) => {
          res
            .status(200)
            .send({ data: UserCtrl.pickUser(result), message: "Valid token" });
        })
        .catch((err) => {
          console.log(err);
          throw new Error("Invalid token");
        });
    } else {
      res.status(403).send({ message: "Invalid Token" });
    }
  }

  static refreshToken(req, res) {
    const { access, refresh } = req.body;

    const payload = verifyToken(refresh);

    if (payload?._id) {
      const accessToken = createToken({ _id: payload._id }, 10 * 60);
      const refreshToken = createToken({ _id: payload._id }, 60 * 60);

      res.status(200).send({
        data: { accessToken, refreshToken },
        message: "Token refreshed",
      });
    } else {
      res.status(403).send({ message: "Session expired" });
    }
  }
}

module.exports = AuthCtrl;
