import { Request, Response, NextFunction } from "express";
import PaymentCard from "../Models/PaymentCard";

export const getAllPaymentCards = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const paymentCards = await PaymentCard.find();
    if (!paymentCards) {
      res.status(200).json({ message: "Картуудын мэдээлэл хоосон байна." });
    }
    res
      .status(200)
      .json({ message: "Картуудын мэдээлэл олдлоо.", paymentCards });
  } catch (error) {
    next(error);
  }
};

export const getPaymentCard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `ID хоосон байна` });
  }

  try {
    const paymentCard = await PaymentCard.findById(id);
    if (!paymentCard) {
      res.status(400).json({ message: `${id} ID-тэй Карт олдсонгүй.` });
    }
    res.status(200).json({ message: `${id} IDтэй Карт олдлоо`, paymentCard });
  } catch (error) {
    next(error);
  }
};

export const createPaymentCard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId, ownerName, cardNumber, expiredDate, cvv, bankName } =
      req.body;

    const paymentCard = await PaymentCard.create({
      userId,
      ownerName,
      cardNumber,
      expiredDate,
      cvv,
      bankName,
    });

    res.status(200).json({ message: `Амжилттай бүртгэгдлээ`, paymentCard });
  } catch (error) {
    next(error);
  }
};

export const updatePaymentCard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `ID хоосон байна` });
  }
  try {
    const paymentCard = await PaymentCard.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!paymentCard) {
      res.status(400).json({ message: `${id} ID-тэй Карт олдсонгүй.` });
    }
    res.status(200).json({
      message: `${id} IDтай Картуудын мэдээлэл шинэчлэгдлээ`,
      paymentCard,
    });
  } catch (error) {
    next(error);
  }
};

export const deletePaymentCard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `ID хоосон байна` });
  }
  try {
    const paymentCard = await PaymentCard.findByIdAndDelete(id);
    if (!paymentCard) {
      res.status(400).json({ message: `${id} ID-тэй Карт олдсонгүй.` });
    }
    res.status(200).json({ message: `Карт устгагдлаа`, paymentCard });
  } catch (error) {
    next(error);
  }
};
