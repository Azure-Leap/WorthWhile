import { Router } from "express";
import {
  createReview,
  deleteReview,
  getAllReviews,
  getReview,
  updateReview,
} from "../controllers/reviewController";

const router = Router();

router.route("/").get(getAllReviews).post(createReview);
router.route("/:id").get(getReview).put(updateReview).delete(deleteReview);

export default router;
