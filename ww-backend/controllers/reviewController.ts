import { Request, Response, NextFunction } from "express";
import Review from "../Models/ReviewModel";
import { IReview } from "../interfaces";

export const getAllReviews = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const reviews = await Review.find();
    if (!reviews) {
      res.status(400).json({ message: "Үнэлгээ хоосон байна." });
    }
    res.status(200).json({ message: "Үнэлгээ олдлоо.", reviews });
  } catch (error) {
    next(error);
  }
};

export const getReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: "ID хоосон байна." });
  }
  try {
    const review = await Review.findById(id);
    if (!review) {
      res.status(400).json({ message: `${id}-тай үнэлгээ олдсонгүй.` });
    }
    res.status(200).json({ message: `${id}-тай үнэлгээ олдлоо.`, review });
  } catch (error) {
    next(error);
  }
};

export const createReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { rating, text, appointmentId } = req.body;

    const review = await Review.create({
      rating,
      text,
      appointmentId,
    });

    res.status(200).json({ message: "Амжилттай бүртгэгдлээ", review });
  } catch (error) {
    next(error);
  }
};

export const updateReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: "ID хоосон байна." });
  }
  try {
    const review = await Review.findByIdAndUpdate(id, req.body, { new: true });
    if (!review) {
      res.status(400).json({ message: `${id}-тай ангилал олдсонгүй.` });
    }
    res
      .status(200)
      .json({ message: `${id}-тай мэдээлэл шинэчлэгдлээ.`, review });
  } catch (error) {
    next(error);
  }
};

export const deleteReview = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: "ID хоосон байна." });
  }
  try {
    const review = await Review.findByIdAndDelete(id);
    if (!review) {
      res.status(400).json({ message: `${id}-тай үнэлгээ олдсонгүй.` });
    }
    res.status(200).json({ message: `${id}-тай үнэлгээ устгагдлаа.`, review });
  } catch (error) {
    next(error);
  }
};
