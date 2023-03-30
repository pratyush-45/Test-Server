const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

//Designing Routes with the help of controllers
router.route("/").post(registerUser);
router.post("/login", authUser);
router.get("/", protect, allUsers);

module.exports = router;
