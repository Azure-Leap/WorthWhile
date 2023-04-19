import { Router } from "express";
import {
  createService,
  deleteService,
  getAllServices,
  getService,
  updateService,
} from "../controllers/serviceController";

const router = Router();

router.route("/").get(getAllServices).post(createService);
router.route("/:id").get(getService).put(updateService).delete(deleteService);

export default router;
