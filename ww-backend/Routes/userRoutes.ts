import { Router } from "express";
import {
  getAllUsers,
  signup,
  signin,
  getUser,
  updateUser,
  deleteUser,
  getPaymentCardByUserId,
  updateGiftCardUser,
} from "../controllers/userControllers";

const router = Router();

router.route("/").get(getAllUsers);

router.route("/payments").get(getPaymentCardByUserId);
router.route("/confirm/:code").get(() => {});
router.route("/signin").post(signin);
router.route("/signup").post(signup);

router.route("/giftcard/:id").post(updateGiftCardUser);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser); // /:id path deerh huseltuudiig hamgiin suuld bichne. Uchir ni /payments zereg path-iig :id gej uzeed code aldaa zaaj bna !!!!

export default router;
