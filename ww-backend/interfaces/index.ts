import mongoose from "mongoose";

interface IUser {
  userName: { type: String; required: true };
  email: { type: String; required: true; unique: true };
  password: string;
  profileImg?: String;
  phoneNumber: { type: String; required: true };
}

interface IService {
  categoryId: { type: mongoose.Types.ObjectId; ref: "Category" };
  serviceName: { type: string; required: true };
  servicePrice: { type: number; required: true };
  serviceImg: [string];
  description: string;
  duration: number;
  stafferId: { type: mongoose.Types.ObjectId; ref: "Staffer" };
  businessId: { type: mongoose.Types.ObjectId; ref: "Business" };
}

interface ICategory {
  categoryTitle: { type: string; required: true };
  categoryImg: string;
  type: {
    type: string;
    required: true;
    enum: ["Hair", "Nail", "Skin", "Makeup", "Tattoo", "Other"];
  };
}
interface IBusiness {
  businessName: { type: string; required: true };
  contactNumber: { type: string; required: true };
  address: {
    city: string;
    district: string;
    street: string;
    zipCode: number;
  };
  businessHours: [number];
  about: string;
  description: string;
  socialMedia: [
    {
      title: string;
      url: string;
      icon: string;
    }
  ];
}

interface IGiftCard {
  businessId: { type: mongoose.Types.ObjectId; ref: "Business" };
  userId: { type: mongoose.Types.ObjectId; ref: "User" };
  price: { type: number; required: true };
  amount: { type: number; required: true };
  cardNumber: { type: string; required: true };
}

interface IAppointment {
  services: [
    {
      serviceId: { type: mongoose.Types.ObjectId; ref: "Service" };
    }
  ];
  userId: { type: mongoose.Types.ObjectId; ref: "User" };
  businessId: { type: mongoose.Types.ObjectId; ref: "Business" };
  totalPrice: number;
  paymentStatus: { type: mongoose.Types.ObjectId; ref: "Payment" };
  bookedDate: Date; // uilchluulegch zahialga hiisen tsag
  startDate: Date; //uilcilgeenii ehleh tsag
}

interface IPayment {
  paidDate: Date;
  status: {
    type: string;
    enum: ["SUCCEED", "FAILED"];
  };
}

interface ISale {
  businessId: { type: mongoose.Types.ObjectId; ref: "Business" };
  serviceId: { type: mongoose.Types.ObjectId; ref: "Service" };
  startDate: Date;
  endDate: Date;
  amount: number;
}

interface IReview {
  userId: { type: mongoose.Types.ObjectId; ref: "User" };
  stafferId: { type: mongoose.Types.ObjectId; ref: "Staffer" };
  businessId: { type: mongoose.Types.ObjectId; ref: "Business" };
  serviceId: { type: mongoose.Types.ObjectId; ref: "Service" };
  reviewDate: Date;
  rating: number;
  text: string;
}

interface IReply {
  reviewId: { type: mongoose.Types.ObjectId; ref: "Review" };
  businessId: { type: mongoose.Types.ObjectId; ref: "Business" };
  replyDate: Date;
  text: string;
}

interface IStaffer {
  stafferName: string;
  businessId: { type: mongoose.Types.ObjectId; ref: "Business" };
  about: string;
}

export {
  IAppointment,
  IUser,
  IBusiness,
  IStaffer,
  IReply,
  IReview,
  IGiftCard,
  IPayment,
  IService,
  ISale,
};
