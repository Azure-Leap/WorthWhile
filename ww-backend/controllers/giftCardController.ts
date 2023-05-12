import { Request, Response, NextFunction } from "express";
import GiftCard from "../Models/GiftCardModel";

export const getAllGiftCards = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const giftCards = await GiftCard.find();
    if (!giftCards) {
      res.status(400).json({ message: "Урамшуулалын картууд хоосон байна." });
    }
    res.status(200).json({ message: "Урамшуулалын картууд оллоо.", giftCards });
  } catch (error) {
    next(error);
  }
};

export const getGiftCard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: "ID хоосон байна." });
  }

  try {
    const giftCard = await GiftCard.findById(id);
    if (!giftCard) {
      res
        .status(400)
        .json({ message: `${id}-тай урамшуулалын карт олдсонгүй.` });
    }
    res
      .status(200)
      .json({ message: `${id}тай урамшуулалын карт олдлоо.`, giftCard });
  } catch (error) {
    next(error);
  }
};

export const createGiftCard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { businessId, price, amount, image } = req.body;

    const giftCard = await GiftCard.create({
      businessId,
      price,
      amount,
      image,
    });

    res.status(201).json({ message: "Амжилттай бүртгэгдлээ.", giftCard });
  } catch (error) {
    next(error);
  }
};

export const updateGiftCard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: "ID хоосон байна" });
  }
  try {
    const giftCard = await GiftCard.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!giftCard) {
      res
        .status(400)
        .json({ message: `${id}-тай урамшуулалын карт олдсонгүй.` });
    }
    res
      .status(200)
      .json({ message: `${id}-тай урамшуулалын карт шинэчлэгдлээ `, giftCard });
  } catch (error) {
    next(error);
  }
};

export const deleteGiftCard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: "ID хоосон байна." });
  }
  try {
    const giftCard = await GiftCard.findByIdAndDelete(id);
    if (!giftCard) {
      res
        .status(400)
        .json({ message: `${id}-тай урамшуулалын карт олдсонгүй.` });
    }
    res
      .status(200)
      .json({ message: `${id}-тай урамшуулалын карт олдлоо.`, giftCard });
  } catch (error) {
    next(error);
  }
};
