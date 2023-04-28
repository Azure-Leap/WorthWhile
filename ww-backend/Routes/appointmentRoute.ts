import { Router } from "express";
import {
  getAllAppointments,
  getAppointment,
  createAppointment,
  deleteAppointment,
} from "../controllers/appointmentController";

const router = Router();

router.route("/").get(getAllAppointments).post(createAppointment);
router.route("/:id").get(getAppointment).delete(deleteAppointment);

export default router;
