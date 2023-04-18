import { Router } from "express";
import {
  getAllBusiness,
  signup,
  signin,
  getBusiness,
  updateBusiness,
  deleteBusiness,
} from "../controllers/businessControllers";

const router = Router();
console.log("Business ROUTE ajillaa");

router.route("/").get(getAllBusiness);
router.route("/signin").post(signin);
router.route("/signup").post(signup);

router
  .route("/:id")
  .get(getBusiness)
  .put(updateBusiness)
  .delete(deleteBusiness);

export default router;