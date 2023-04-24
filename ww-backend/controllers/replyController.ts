import { Request, Response, NextFunction } from "express";
import Reply from "../Models/ReplyModel";
import { IReply } from "../interfaces";

export const getAllReplies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const replies = await Reply.find();
    if (!replies) {
      res.status(400).json({ message: "Сэтгэгдэл хоосон байна" });
    }
    res.status(200).json({ message: "Сэтгэгдэл олдлоо.", replies });
  } catch (error) {
    next(error);
  }
};

export const getReply = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: "ID хоосон байна" });
  }

  try {
    const reply = await Reply.findById(id);
    if (!reply) {
      res.status(400).json({ message: `${id}-тай сэтгэгдэл олдсонгүй` });
    }
    res.status(200).json({ message: `${id}-тай сэтгэгдэл олдлоо.`, reply });
  } catch (error) {
    next(error);
  }
};

export const createReply = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { reviewId, replyDate, text }: IReply = req.body;

    const reply = await Reply.create({
      reviewId,
      replyDate,
      text,
    });

    res.status(200).json({ message: "Амжилттай бүртгэгдлээ.", reply });
  } catch (error) {
    next(error);
  }
};

export const updateReply = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: "ID хоосон байна" });
  }
  try {
    const reply = await Reply.findByIdAndUpdate(id, req.body, { new: true });
    if (!reply) {
      res.status(400).json({ message: `${id}-тай сэтгэгдэл олдсонгүй.` });
    }
    res
      .status(200)
      .json({ message: `${id}-тай сэтгэгдэл шинэчлэгдлээ.`, reply });
  } catch (error) {
    next(error);
  }
};

export const deleteReply = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: "ID хоосон байна." });
  }
  try {
    const reply = await Reply.findByIdAndDelete(id);
    if (!reply) {
      res.status(400).json({ message: `${id}-тай сэтгэгдэл олдсонгүй.` });
    }
    res.status(200).json({ message: `${id}-тай сэтгэгдэл олдлоо.`, reply });
  } catch (error) {
    next(error);
  }
};
