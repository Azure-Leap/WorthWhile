import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Business from "../Models/BusinesModel";
import Staffer from "../Models/StaffModel";
import Service from "../Models/ServiceModel";
import GiftCard from "../Models/GiftCardModel";
import Appointment from "../Models/Appointment";
import path from "path";

const getAllBusiness = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const business = await Business.find();
    if (!business) {
      res.status(200).json({ message: "Бизнесийн мэдээлэл хоосон байна." });
    }
    res.status(200).json({ message: "Бизнесийн мэдээлэл олдлоо.", business });
  } catch (error) {
    next(error);
  }
};

const secretKey = process.env.JWT_SECRET_KEY || "";

const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {
      businessName,
      email,
      password,
      businessHours,
      address,
      description,
      socialMedia,
      profileImg,
      phoneNumber,
    }: any = req.body;
    const hashedPassword = bcrypt.hashSync(password.toString(), 10);
    const business = await Business.create({
      businessName,
      email,
      password: hashedPassword,
      businessHours,
      address,
      description,
      socialMedia,
      profileImg,
      phoneNumber,
    });
    const { id } = business;
    const token = jwt.sign({ id }, secretKey, {
      expiresIn: 1200,
    });

    res.status(200).json({ message: `Амжилттай бүртгэгдлээ`, business, token });
  } catch (error) {
    next(error);
  }
};

const signin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const business = await Business.findOne({ email: req.body.email }).select(
      "+password"
    );
    if (!business) {
      res.status(400).json({ message: `Имэйл эсвэл нууц үг буруу байна` });
    } else {
      const checkPass = bcrypt.compareSync(
        req.body.password,
        business.password.toString()
      );
      if (!checkPass) {
        res.status(400).json({ message: `Имэйл эсвэл нууц үг буруу байна` });
      }
      const { id } = business;
      const token = jwt.sign({ id }, secretKey, {
        expiresIn: 1200,
      });
      res.status(200).json({ message: `Амжилттай нэвтэрлээ`, business, token });
    }
  } catch (error) {
    next(error);
  }
};

const getBusiness = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `ID хоосон байна.` });
  }
  try {
    const business = await Business.findById(id);
    if (!business) {
      res.status(400).json({ message: `Бизнес алга байна.` });
    }
    res.status(201).json({
      message: `Ийм ${id} ID-тай бизнес амжилттай олдлоо`,
      business,
    });
  } catch (error) {
    next(error);
  }
};

const updateBusiness = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `Йим ${id} ID-тай бизнес олдсонгүй` });
  }
  try {
    const business = await Business.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json({
      message: `Ийм ${id} ID-тай бизнес амжилттай шинэчилэгдлээ`,
      business,
    });
  } catch (error) {
    next(error);
  }
};

const deleteBusiness = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `Йим ${id} ID-тай бизнес олдсонгүй` });
  }
  try {
    const business = await Business.findByIdAndDelete(id);
    res.status(201).json({
      message: `Ийм ${id} ID-тай бизнесийг амжилттай устгалаа`,
      business,
    });
  } catch (error) {
    next(error);
  }
};

export const getStaffsByBusinessId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { businessId } = req.query;
    const staffs: any = await Staffer.find({ businessId }).populate(
      "businessId"
    );

    if (!staffs) {
      res.status(200).json({ message: "Үсчдийн мэдээлэл хоосон байна." });
    }
    res.status(200).json({ message: "Үсчдийн мэдээлэл олдлоо.", staffs });
  } catch (error) {
    next(error);
  }
};

export const getServicesByBusinessId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { businessId } = req.query;
    const services = await Service.find({ businessId })
      .populate("businessId")
      .populate("categoryId");
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

export const getGiftCardsByBusinessId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { businessId } = req.query;
    const giftCards = await GiftCard.find({ businessId }).populate(
      "businessId"
    );

    if (!giftCards) {
      res.status(200).json({ message: "Картуудын мэдээлэл хоосон байна." });
    }
    res.status(200).json({ message: "Картуудын мэдээлэл олдлоо.", giftCards });
  } catch (error) {
    next(error);
  }
};

export const AppointmentByBusinessId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { businessId } = req.query;
    console.log(businessId);
    const serviceDoc = await Service.findOne({
      businessId,
    });
    const appointments = await Appointment.find({
      services: { $in: serviceDoc?._id },
    }).populate("services");

    // []
    if (appointments && appointments.length === 0) {
      res.status(200).json({ message: "Захиалгын мэдээлэл хоосон байна." });
      return;
    }
    res
      .status(200)
      .json({ message: "Захиалгын мэдээлэл олдлоо.", appointments });
  } catch (error) {
    next(error);
  }
};

export {
  getAllBusiness,
  signup,
  signin,
  getBusiness,
  updateBusiness,
  deleteBusiness,
};
