import { Request, Response, NextFunction } from "express";

const error = (err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(400).json({ message: "next(err)" });
};

export default error;
