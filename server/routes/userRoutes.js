const { Router } = require("express");
const checkCookie = require("../middleware/checkCookie.js");

const {
  getAllUser,
  getOneUser,
  registerUser,
  updateUser,
  deleteUser,
  loginUser,
} = require("../controllers/userController.js");

const userRouter = Router();

userRouter.get("/getAll", getAllUser);
userRouter.get("/getOne/:email",  getOneUser);
userRouter.post("/register", registerUser);
userRouter.put("/update/:email", updateUser);
userRouter.delete("/delete/:id", checkCookie, deleteUser);
userRouter.get('/login', loginUser);

module.exports = userRouter;