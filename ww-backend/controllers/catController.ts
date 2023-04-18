import { Request, Response, NextFunction } from "express";
import Category from "../Models/CategoryModel";
import { ICategory } from "../interfaces";

export const getAllCats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const cats = await Category.find();
    if (!cats) {
      res.status(200).json({ message: "Ангилалуудын мэдээлэл хоосон байна." });
    }
    res.status(200).json({ message: "Ангилалуудын мэдээлэл олдлоо.", cats });
  } catch (error) {
    next(error);
  }
};

export const getCat = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `ID хоосон байна` });
  }

  try {
    const cat = await Category.findById(id);
    if (!cat) {
      res.status(400).json({ message: `${id} ID-тэй ангилал олдсонгүй.` });
    }
    res.status(200).json({ message: `${id} IDтэй ангилал олдлоо`, cat });
  } catch (error) {
    next(error);
  }
};

export const createCat = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { categoryTitle, categoryImg, catType }: ICategory = req.body;

    const cat = await Category.create({
      categoryTitle,
      categoryImg,
      catType,
    });

    res.status(200).json({ message: `Амжилттай бүртгэгдлээ`, cat });
  } catch (error) {
    next(error);
  }
};

export const updateCat = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `ID хоосон байна` });
  }
  try {
    const cat = await Category.findByIdAndUpdate(id, req.body, { new: true });
    if (!cat) {
      res.status(400).json({ message: `${id} ID-тэй ангилал олдсонгүй.` });
    }
    res.status(200).json({
      message: `${id} IDтай ангилалын мэдээлэл шинэчлэгдлээ`,
      cat,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCat = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: `ID хоосон байна` });
  }
  try {
    const cat = await Category.findByIdAndDelete(id);
    if (!cat) {
      res.status(400).json({ message: `${id} ID-тэй ангилал олдсонгүй.` });
    }
    res.status(200).json({ message: `${id} IDтэй ангилал устгагдлаа`, cat });
  } catch (error) {
    next(error);
  }
};
