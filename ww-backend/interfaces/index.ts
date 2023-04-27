import mongoose from "mongoose";

interface IUser {
  userName: String;
  email: String;
  password: String;
  profileImg?: String;
  phoneNumber: String;
}

interface IService {
  categoryId: String;
  serviceName: String;
  servicePrice: Number;
  serviceImg: [String];
  description?: String;
  duration: Number;
  businessId: String;
}

interface ICategory {
  categoryTitle: String;
  categoryImg?: String;
  catType: String;
}
interface IBusiness {
  profileImg: any;
  password: { type: string; required: true };
  phoneNumber: { type: string; required: true };
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
  description: string;
  socialMedia?: [
    {
      title: string;
      url: string;
      icon: string;
    }
  ];
}

interface IGiftCard {
  businessId: {
    type: mongoose.Types.ObjectId;
    ref: "Business";
    required: true;
  };
  userId: { type: mongoose.Types.ObjectId; ref: "User"; required: true };
  price: { type: number; required: true };
  amount: { type: number; required: true };
  cardNumber: { type: string; required: true };
}

interface IAppointment {
  services: [
    {
      serviceId: {
        type: mongoose.Types.ObjectId;
        ref: "Service";
        required: true;
      };
    }
  ];
  userId: { type: mongoose.Types.ObjectId; ref: "User"; required: true };
  totalPrice: Number;
  startTime: Date; //timestamptai baih!!!
}

interface ITransaction {
  appointmentId: {
    type: mongoose.Types.ObjectId;
    ref: "Appointment";
    required: true;
  };
  paymentId: { type: mongoose.Types.ObjectId; ref: "Payment"; required: true };
  date: Date;
  status: {
    type: string;
    enum: ["SUCCEED", "FAILED"];
  };
}

interface IPayment {
  paymentType: String;
  UserId: { type: mongoose.Types.ObjectId; ref: "User"; required: true };
}

interface ISale {
  serviceId: { type: mongoose.Types.ObjectId; ref: "Service"; required: true };
  startDate: Date;
  endDate: Date;
  amount: number;
}

interface IReview {
  appointmentId: {
    type: mongoose.Types.ObjectId;
    ref: "Appointment";
    required: true;
  };
  reviewDate: Date;
  rating: number;
  text: string;
}

interface IReply {
  reviewId: { type: mongoose.Types.ObjectId; ref: "Review"; required: true };
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
