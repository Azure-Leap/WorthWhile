import { Router } from "express";
import {
  getAllReplies,
  getReply,
  createReply,
  updateReply,
  deleteReply,
} from "../controllers/replyController";

const router = Router();

router.route("/").get(getAllReplies).post(createReply);
router.route("/:id").get(getReply).put(updateReply).delete(deleteReply);
export default router;
