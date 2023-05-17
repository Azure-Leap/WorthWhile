import { Router } from "express";
import {
  createStaff,
  deleteStaff,
  getAllStaffs,
  getStaff,
  updateStaff,
  addOrder,
} from "../controllers/staffController";

const router = Router();

router.route("/").get(getAllStaffs).post(createStaff);
router.route("/order/:id").put(addOrder);
router.route("/:id").get(getStaff).put(updateStaff).delete(deleteStaff);

export default router;
