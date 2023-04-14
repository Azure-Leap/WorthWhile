import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Models/UserModel";
import { IUser } from "../interfaces";

const secretKey = process.env.JWT_SECRET_KEY || "";
export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userName, email, password, phoneNumber } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
      phoneNumber,
    });
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
  // try {
  //   const user: IUser = await User.findOne({ email: req.body.email }).select(
  //     "+password"
  //   );
  //   if (!user) {
  //     res.status(400).json({ message: `Имэйл эсвэл нууц үг буруу байна` });
  //   }
  //   const checkPass = bcrypt.compareSync(req.body.password, user.password);
  //   if (!checkPass) {
  //     res.status(400).json({ message: `Имэйл эсвэл нууц үг буруу байна` });
  //   }
  //   const { _id } = user;
  //   const token = jwt.sign({ _id }, secretKey, {
  //     expiresIn: 1200,
  //   });
  //   res.status(200).json({ message: `Амжилттай нэвтэрлээ`, user, token });
  // } catch (error) {
  //   next(error);
  // }
  // console.log("amjilttai login hiilee");
};
