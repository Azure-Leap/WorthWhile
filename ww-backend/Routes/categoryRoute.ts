import { Router } from "express";
import {
  createCat,
  deleteCat,
  getAllCats,
  getCat,
  updateCat,
} from "../controllers/catController";

const router = Router();

router.route("/").get(getAllCats).post(createCat);
router.route("/:id").get(getCat).put(updateCat).delete(deleteCat);

export default router;
