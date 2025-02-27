import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser
} from "./user.controller.js";
// Links - user.routes.js

const router = express.Router();

router.get("/getAllUsers", getUsers);
router.post("/createUsers", createUser);
router.get("/getOneUser/:id", getUserById);
router.put("/updateUser/:id", updateUser); // to update something we need to use put
router.delete("/deleteUser/:id", deleteUser);

export default router;
