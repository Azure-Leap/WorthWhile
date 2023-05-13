import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../Models/UserModel";
import PaymentCard from "../Models/PaymentCard";
import { sendEmail } from "../utils/sendEmail";

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

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `ID хоосон байна` });
  }

  try {
    const user = await User.findById(id);
    if (!user) {
      res.status(400).json({ message: `${id} ID-тэй хэрэглэгч олдсонгүй.` });
    }
    res.status(200).json({ message: `${id} IDтэй хэрэглэгч олдлоо`, user });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `ID хоосон байна` });
  }
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      res.status(400).json({ message: `${id} ID-тэй хэрэглэгч олдсонгүй.` });
    }

    // let updatedUserInput = user;

    // if (req?.body?.newPassword) {
    //   const compare = await bcrypt.compare(req.body.oldPassword, user.password);
    //   if (!compare) {
    //     throw new Error("Pass buruu bna");
    //   }
    //   const hashedPassword = bcrypt.hashSync(
    //     req.body.newPassword.toString(),
    //     10
    //   );
    //   updatedUserInput.password = hashedPassword;
    // }

    res.status(200).json({
      message: `Таны мэдээлэл шинэчлэгдлээ`,
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const updateUserPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `ID хоосон байна` });
  }
  try {
    const user = (await User.findById(id)) as any;

    if (!user) {
      return res
        .status(400)
        .json({ message: `${id} ID-тэй хэрэглэгч олдсонгүй.` });
    }

    if (req?.body?.newPassword) {
      const compare = await bcrypt.compare(req.body.oldPassword, user.password);
      if (!compare) {
        throw new Error("Huuchin Pass buruu bna");
      }

      const hashedPassword = bcrypt.hashSync(
        req.body.newPassword.toString(),
        10
      );
      user.password = hashedPassword;
      await user.save();
    }

    res.status(200).json({
      message: `Таны мэдээлэл шинэчлэгдлээ`,
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `ID хоосон байна` });
  }
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      res.status(400).json({ message: `${id} ID-тэй хэрэглэгч олдсонгүй.` });
    }
    res.status(200).json({ message: `${id} IDтэй хэрэглэгч устгагдлаа`, user });
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
    const hashedPassword = bcrypt.hashSync(password.toString(), 10);
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
  try {
    const user = await User.findOne({ email: req.body.email }).select(
      "+password"
    );
    if (!user) {
      res.status(400).json({ message: `Имэйл эсвэл нууц үг буруу байна` });
    } else {
      const checkPass = bcrypt.compareSync(
        req.body.password,
        user.password.toString()
      );
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
};

export const getPaymentCardByUserId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.query;
    const paymentCards = await PaymentCard.find({ userId }).populate("userId");
    if (!paymentCards) {
      return res
        .status(200)
        .json({ message: "Картуудын мэдээлэл хоосон байна." });
    }
    res
      .status(200)
      .json({ message: "Kартуудын мэдээлэл олдлоо.", paymentCards });
  } catch (error) {
    console.log("ERR", error);
    next(error);
  }
};

export const updateGiftCardUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: `ID хоосон байна` });
  }
  try {
    const user = await User.findById(id);
    if (!user) {
      return res
        .status(400)
        .json({ message: `${id} ID-тэй хэрэглэгч олдсонгүй.` });
    }
    user.giftCards.push(req.body.giftCard);
    await user?.save();
    res.status(200).json({
      message: `${id} IDтай хэрэглэгчийн мэдээлэл шинэчлэгдлээ`,
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const getFavoritesUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ message: `ID хоосон байна` });
  }
  try {
    const user = await User.findById(id).populate({
      path: "favorites",
    });
    if (!user) {
      return res
        .status(400)
        .json({ message: `${id} ID-тэй хэрэглэгч олдсонгүй.` });
    }
    const favorites = user.favorites;
    res.status(200).json({
      message: `${id} IDтай хэрэглэгчийн дуртай салонууд олдлоо`,
      favorites,
    });
  } catch (error) {
    next(error);
  }
};

export const addFavoritesUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { favoriteId } = req.body;

  if (!id) {
    return res.status(400).json({ message: `ID хоосон байна` });
  }

  try {
    const user = await User.findById(id);
    if (!user) {
      return res
        .status(400)
        .json({ message: `${id} ID-тэй хэрэглэгч олдсонгүй.` });
    }
    user.favorites.push(favoriteId);
    await user?.save();

    res.status(200).json({
      message: `${id} IDтай хэрэглэгчийн мэдээлэл шинэчлэгдлээ`,
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const removeFavoritesUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { favoriteId } = req.body;
  if (!id) {
    return res.status(400).json({ message: `ID хоосон байна` });
  }

  try {
    const user = await User.findById(id);
    if (!user) {
      return res
        .status(400)
        .json({ message: `${id} ID-тэй хэрэглэгч олдсонгүй.` });
    }
    const idx = user.favorites.indexOf(favoriteId);
    if (idx < 0)
      return res.status(200).json({
        message: `${id} IDтай мэдээлэл олдсонгүй`,
        user,
      });

    user.favorites.splice(idx, 1);
    await user?.save();
    res.status(200).json({
      message: `${id} IDтай мэдээлэл шинэчлэгдлээ`,
      user,
    });
  } catch (error) {
    next(error);
  }
};
