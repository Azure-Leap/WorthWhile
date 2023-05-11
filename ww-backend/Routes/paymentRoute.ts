import { Router } from "express";
import {
  createPaymentCard,
  deletePaymentCard,
  getAllPaymentCards,
  getPaymentCard,
  updatePaymentCard,
} from "../controllers/paymentController";

const router = Router();

router.route("/").get(getAllPaymentCards).post(createPaymentCard);
router
  .route("/:id")
  .get(getPaymentCard)
  .put(updatePaymentCard)
  .delete(deletePaymentCard);

export default router;
