import { Request, Response, NextFunction } from "express";
import Appointment from "../Models/Appointment";
import { IAppointment } from "../interfaces";

export const getAllAppointments = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const appointments = await Appointment.find().populate("services");
    if (!appointments) {
      res.status(400).json({ message: "Уулзалт хоосон байна." });
    }
    res.status(200).json({ message: "Уулзалт олдлоо.", appointments });
  } catch (error) {
    next(error);
  }
};

export const getAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: "ID хоосон байна." });
  }

  try {
    const appointment = await Appointment.findById(id);
    if (!appointment) {
      res.status(400).json({ message: `${id}-тай уулзалт олдсонгүй.` });
    }
    res.status(200).json({ message: `${id}-тай уулзалт олдлоо.`, appointment });
  } catch (error) {
    next(error);
  }
};

export const createAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { services, userId, totalPrice, startTime }: IAppointment = req.body;

    const appointment = await Appointment.create({
      services,
      userId,
      totalPrice,
      startTime,
    });
    res.status(201).json({ message: "Амжилттай бүртгэгдлээ.", appointment });
  } catch (error) {
    next(error);
  }
};

export const deleteAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ message: "ID хоосон байна." });
  }
  try {
    const appointment = await Appointment.findByIdAndDelete(id);
    if (!appointment) {
      res.status(400).json({ message: `${id}-тай уулзалт олдсонгүй.` });
    }
    res.status(200).json({ message: `${id}-тай уулзалт олдлоо.`, appointment });
  } catch (error) {
    next(error);
  }
};
