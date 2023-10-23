const UserModel = require("../models/userModel.js");
const saveCookie = require("../middleware/saveCookie.js");

exports.getAllUser = async (req, res) => {
  await UserModel.find().then((data) => {
    res.send(data);
  })
  .catch((err) => {
    console.log(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  });;  
};

exports.getOneUser = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await UserModel.findOne({ email: email });
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ msg: "User not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: err, msg: "Something went wrong!" });
  }
};


exports.loginUser = async (req, res) => {
  const Idtoken = req.query.token;
  await saveCookie(Idtoken, res);
}

exports.registerUser = async (req, res) => {
  await UserModel.create(req.body)
    .then((data) => {
      console.log("Saved Successfully...");
      res.status(201).send(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err, msg: "Something went wrong!" });
    });
};

exports.updateUser = async (req, res) => {
  const { email } = req.params;
  await UserModel.findOneAndUpdate({ email: email }, req.body)
    .then(() => res.send("Update successfully"))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err, msg: "Something went wrong!" });
    });
};
exports.deleteUser = async (req, res) => {
  const { id } = req.params;
  await UserModel.findByIdAndDelete(id)
    .then(() => res.send("Deleted successfully"))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err, msg: "Something went wrong!" });
  });
};

