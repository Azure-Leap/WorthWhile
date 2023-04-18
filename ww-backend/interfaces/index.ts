import mongoose from "mongoose";

interface IUser {
  userName: String;
  email: String;
  password: String;
  profileImg?: String;
  phoneNumber: String;
}

interface IService {
  categoryId: { type: mongoose.Types.ObjectId; ref: "Category" };
  serviceName: { type: string; required: true };
  servicePrice: { type: number; required: true };
  serviceImg: [string];
  description?: string;
  duration: number;
  businessId: { type: mongoose.Types.ObjectId; ref: "Business" };
}

interface ICategory {
  categoryTitle: String;
  categoryImg?: String;
  catType: String;
}
interface IBusiness {
  password: { type: string; required: true };
  businessName: { type: string; required: true };
  contactNumber: { type: string; required: true };
  email: { type: string; required: true };
  address: {
    city: string;
    district: string;
    street: string;
    zipCode: number;
  };
  businessHours: [
    {
      day: Number;
      startTime: String;
      endTime: String;
      isRestDay: Boolean;
    }
  ];
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
  totalPrice: number;
  transactionId: { type: mongoose.Types.ObjectId; ref: "Transaction" };
  bookedTime: Date; // uilchluulegch zahialga hiisen tsag
  startTime: Date; //uilcilgeenii ehleh tsag
}

interface ITransaction {
  paymentId: { type: mongoose.Types.ObjectId; ref: "Payment" };
  date: Date;
  status: {
    type: string;
    enum: ["SUCCEED", "FAILED"];
  };
}

interface IPayment {
  paymentType: String;
  UserId: { type: mongoose.Types.ObjectId; ref: "User" };
}

interface ISale {
  serviceId: { type: mongoose.Types.ObjectId; ref: "Service" };
  startDate: Date;
  endDate: Date;
  amount: number;
}

interface IReview {
  businessId: { type: mongoose.Types.ObjectId; ref: "Business" };
  appointmentId: { type: mongoose.Types.ObjectId; ref: "Appointment" };
  reviewDate: Date;
  rating: number;
  text: string;
}

interface IReply {
  reviewId: { type: mongoose.Types.ObjectId; ref: "Review" };
  replyDate: Date;
  text: string;
}

interface IStaffer {
  stafferName: String;
  staffImg?: String;
  businessId: String;
  avialableTimes: [Date];
  about?: string;
}

export {
  ICategory,
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
  ITransaction,
};
