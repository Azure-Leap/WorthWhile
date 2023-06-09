import { Router } from "express";
import {
  getAllUsers,
  signup,
  signin,
  getUser,
  updateUser,
  updateUserPassword,
  deleteUser,
  getPaymentCardByUserId,
  updateGiftCardUser,
  removeFavoritesUser,
  addFavoritesUser,
  getFavoritesUser,
  removeGiftcardUser,
  getAppointmentsByUserId,
} from "../controllers/userControllers";

const router = Router();

router.route("/").get(getAllUsers);

router.route("/payments").get(getPaymentCardByUserId);
router.route("/appointments").get(getAppointmentsByUserId);
router.route("/confirm/:code").get(() => {});
router.route("/changePassword/:id").put(updateUserPassword);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);
router.route("/signin").post(signin);
router.route("/signup").post(signup);

router.route("/giftcard/:id").post(updateGiftCardUser);
router.route("/giftcard/:id").put(removeGiftcardUser);

router.route("/favorites/:id").post(addFavoritesUser);
router.route("/favorites/:id").put(removeFavoritesUser);
router.route("/favorites/:id").get(getFavoritesUser);

router.route("/:id").get(getUser).put(updateUser).delete(deleteUser); // /:id path deerh huseltuudiig hamgiin suuld bichne. Uchir ni /payments zereg path-iig :id gej uzeed code aldaa zaaj bna !!!!

export default router;
