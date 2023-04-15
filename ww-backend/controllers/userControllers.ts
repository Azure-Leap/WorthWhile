import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Models/UserModel";
import { IUser } from "../interfaces";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find();
    if (!users) {
      res.status(200).json({ message: "Хэрэглэгчдийн мэдээлэл хоосон байна." });
    }
    res.status(200).json({ message: "Хэрэглэгчдийн мэдээлэл олдлоо.", users });
  } catch (error) {
    next(error);
  }
};

const secretKey = process.env.JWT_SECRET_KEY || "";
export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userName, email, password, phoneNumber } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    console.log(userName, email, password, phoneNumber);
    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
      phoneNumber,
    });
    console.log(user);
    const { _id } = user;
    const token = jwt.sign({ _id }, secretKey, {
      expiresIn: 1200,
    });

    res.status(200).json({ message: `Амжилттай бүртгэгдлээ`, user, token });
  } catch (error) {
    next(error);
  }
};

export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findOne({ email: req.body.email }).select(
      "+password"
    );
    if (!user) {
      res.status(400).json({ message: `Имэйл эсвэл нууц үг буруу байна` });
    } else {
      const checkPass = bcrypt.compareSync(req.body.password, user.password);
      if (!checkPass) {
        res.status(400).json({ message: `Имэйл эсвэл нууц үг буруу байна` });
      }
      const { _id } = user;
      const token = jwt.sign({ _id }, secretKey, {
        expiresIn: 1200,
      });
      res.status(200).json({ message: `Амжилттай нэвтэрлээ`, user, token });
    }
  } catch (error) {
    next(error);
  }
  console.log("amjilttai login hiilee");
};
