import { Router } from "express";
import {
  getAllUsers,
  signup,
  signin,
  getUser,
  updateUser,
  updateUserPassword,
  deleteUser,
} from "../controllers/userControllers";

const router = Router();

router.route("/").get(getAllUsers);
router.route("/changePassword/:id").put(updateUserPassword);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);
router.route("/signin").post(signin);
router.route("/signup").post(signup);
router.route("/confirm/:code").get(() => {});

export default router;
