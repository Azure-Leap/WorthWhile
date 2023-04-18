import { Router } from "express";
import {
  getAllUsers,
  signup,
  signin,
  getUser,
  updateUser,
  deleteUser,
} from "../controllers/userControllers";

const router = Router();

router.route("/").get(getAllUsers);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);
router.route("/signin").post(signin);
router.route("/signup").post(signup);

export default router;
