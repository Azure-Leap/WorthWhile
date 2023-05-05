import { Request, Response, NextFunction } from "express";
import Service from "../Models/ServiceModel";
import { IService } from "../interfaces";

export const getAllServices = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { filter } = req.body;
    //filter: {
    //   businessId: "bbb",
    //   categoryId: "kk",
    // }
    const services = await Service.find({ filter }).populate("categoryId");
    if (!services) {
      res
        .status(200)
        .json({ message: "Үйлчилгээнүүдийн мэдээлэл хоосон байна." });
    }
    res
      .status(200)
      .json({ message: "Үйлчилгээнүүдийн мэдээлэл олдлоо.", services });
  } catch (error) {
    next(error);
  }
};

export const getService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `ID хоосон байна` });
  }

  try {
    const service = await Service.findOne({ businessId: id }).populate(
      "categoryId"
    );
    if (!service) {
      res.status(400).json({ message: `${id} ID-тэй Үйлчилгээ олдсонгүй.` });
    }
    res.status(200).json({ message: `${id} IDтэй Үйлчилгээ олдлоо`, service });
  } catch (error) {
    next(error);
  }
};

export const createService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {
      categoryId,
      businessId,
      serviceName,
      serviceImg,
      servicePrice,
      duration,
      description,
    }: IService = req.body;

    const service = await Service.create({
      categoryId,
      businessId,
      serviceName,
      serviceImg,
      servicePrice,
      duration,
      description,
    });

    res.status(200).json({ message: `Амжилттай бүртгэгдлээ`, service });
  } catch (error) {
    next(error);
  }
};

export const updateService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `ID хоосон байна` });
  }
  try {
    const service = await Service.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!service) {
      res.status(400).json({ message: `${id} ID-тэй Үйлчилгээ олдсонгүй.` });
    }
    res.status(200).json({
      message: `${id} IDтай Үйлчилгээний мэдээлэл шинэчлэгдлээ`,
      service,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `ID хоосон байна` });
  }
  try {
    const service = await Service.findByIdAndDelete(id);
    if (!service) {
      res.status(400).json({ message: `${id} ID-тэй Үйлчилгээ олдсонгүй.` });
    }
    res
      .status(200)
      .json({ message: `${id} IDтэй Үйлчилгээ устгагдлаа`, service });
  } catch (error) {
    next(error);
  }
};
