import { Router } from "express";
import {
  getAllGiftCards,
  getGiftCard,
  updateGiftCard,
  createGiftCard,
  deleteGiftCard,
} from "../controllers/giftCardController";

const router = Router();

router.route("/").get(getAllGiftCards).post(createGiftCard);
router
  .route("/:id")
  .get(getGiftCard)
  .put(updateGiftCard)
  .delete(deleteGiftCard);

export default router;
