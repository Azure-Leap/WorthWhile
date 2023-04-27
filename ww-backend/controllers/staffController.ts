import { Request, Response, NextFunction } from "express";
import Staffer from "../Models/StaffModel";
import { IStaffer } from "../interfaces";

export const getAllStaffs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { businessId } = req.query;
    const staffs: any = await Staffer.find().populate("businessId");

    if (!staffs) {
      res.status(200).json({ message: "Үсчдийн мэдээлэл хоосон байна." });
    }
    res.status(200).json({ message: "Үсчдийн мэдээлэл олдлоо.", staffs });
  } catch (error) {
    next(error);
  }
};

export const getStaff = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `ID хоосон байна` });
  }

  try {
    const staff = await Staffer.findById(id);
    if (!staff) {
      res.status(400).json({ message: `${id} ID-тэй үсчин олдсонгүй.` });
    }
    res.status(200).json({ message: `${id} IDтэй үсчин олдлоо`, staff });
  } catch (error) {
    next(error);
  }
};

export const createStaff = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { stafferName, staffImg, businessId, about }: IStaffer = req.body;

    const getTimes = (start: number, end: number): Array<Object> => {
      const arr = [],
        dt = new Date("2023-01-01 00:00:00");
      dt.setUTCHours(start);

      while (dt.getUTCHours() <= end) {
        arr.push({ isAvailable: true, time: new Date(dt) });
        dt.setUTCHours(dt.getUTCHours() + 1);
      }

      return arr;
    };

    const availableTimes = getTimes(
      1, //'9
      9 //
    );

    const staff = await Staffer.create({
      stafferName,
      staffImg,
      businessId,
      about,
      avialableTimes: availableTimes,
    });

    res.status(200).json({ message: `Амжилттай бүртгэгдлээ`, staff });
  } catch (error) {
    next(error);
  }
};

export const updateStaff = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `ID хоосон байна` });
  }
  try {
    const staff = await Staffer.findByIdAndUpdate(id, req.body, { new: true });
    if (!staff) {
      res.status(400).json({ message: `${id} ID-тэй үсчин олдсонгүй.` });
    }
    res.status(200).json({
      message: `${id} IDтай үсчний мэдээлэл шинэчлэгдлээ`,
      staff,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteStaff = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `ID хоосон байна` });
  }
  try {
    const staff = await Staffer.findByIdAndDelete(id);
    if (!staff) {
      res.status(400).json({ message: `${id} ID-тэй үсчин олдсонгүй.` });
    }
    res.status(200).json({ message: `${id} IDтэй үсчин устгагдлаа`, staff });
  } catch (error) {
    next(error);
  }
};
