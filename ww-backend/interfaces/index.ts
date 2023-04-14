interface IUser {
  userName: string;
  email: string;
  password: string;
  profileImg: string;
  phoneNumber: string;
  payments: [IPayment];
  favoriteStaffs: [IStaffer];
  favoriteSalon: [IBusiness];
  appointments: [IAppointment];
  giftCards: [IGiftCard];
}

interface IService {
  serviceName: string;
  servicePrice: number;
  serviceImg: [string];
  description: string;
  duration: number;
  staffName: string;
  businessName: string;
}

interface IBusiness {
  businessName: string;
  contactNumber: string;
  address: {
    city: string;
    district: string;
    street: string;
    zipCode: number;
  };
  businessHours: number;
  about: string;
  description: string;
  sales: [ISale];
  socialMedia: [
    {
      title: string;
      url: string;
      icon: string;
    }
  ];
  staffers: [IStaffer];
  appointments: [IAppointment];
  reviews: [IReview];
  giftCards: [IGiftCard];
}

interface IGiftCard {
  businessName: string;
  userName: string;
  price: number;
  cardNumber: number;
}

interface IAppointment {
  serviceName: string;
  userName: string;
  businessName: string;
  staffName: string;
  totalPrice: number;
  paymentStatus: string;
  bookedDate: Date;
  startDate: Date;
}

interface IPayment {
  paidDate: Date;
  status: {
    type: string;
    enum: ["SUCCEED", "FAILED"];
  };
}

interface ISale {
  serviceName: string;
  startDate: Date;
  endDate: Date;
  amount: number;
}

interface IReview {
  userName: string;
  staffName: string;
  businessName: string;
  serviceName: string;
  reviewDate: Date;
  rating: number;
  text: string;
  replies: [IReply];
}

interface IReply {
  reviewId: string;
  businessName: string;
  replyDate: Date;
  text: string;
}

interface IStaffer {
  staffName: string;
  businessName: string;
  about: string;
  services: [IService];
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
