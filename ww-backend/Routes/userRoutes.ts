import { Router } from "express";
import { getAllUsers, signup, signin } from "../controllers/userControllers";

const router = Router();
console.log("ROUTE ajillaa");

router.route("/").get(getAllUsers);
router.route("/signin").post(signin);
router.route("/signup").post(signup);

export default router;
