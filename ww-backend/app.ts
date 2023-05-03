import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db";
import userRoute from "./Routes/userRoutes";
import businessRoute from "./Routes/businessRoutes";
import staffRoute from "./Routes/staffRoute";
import categoryRoute from "./Routes/categoryRoute";
import serviceRoute from "./Routes/serviceRoute";
import reviewRoute from "./Routes/reviewRoutes";
import replyRoute from "./Routes/replyRoutes";
import appointmentRoute from "./Routes/appointmentRoute";
import logger from "./middlewares/logger";
import error from "./middlewares/error";
import { cloudinary } from "./utils/cloudinary";
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/users", userRoute);
app.use("/business", businessRoute);
app.use("/staffs", staffRoute);
app.use("/categories", categoryRoute);
app.use("/services", serviceRoute);
app.use("/reviews", reviewRoute);
app.use("/replies", replyRoute);
app.use("/appointments", appointmentRoute);

const storage = new CloudinaryStorage({
  cloudinary,
  folder: "uploads",
});

const upload = multer({ storage });

app.post("/zuragUploadHiinee", upload.single("zurag"), (req: any, res: any) => {
  res.status(200).json({
    message: "Amjilttai upload hiigdlee",
    file: res.file,
  });
});

const URI = process.env.URI || "";
const PORT = process.env.PORT || "";

app.use(error);

connectDB(URI);

app.get("/", (req, res) => res.send("HELLO WW"));

app.listen(PORT, () => console.log("WhorthWhile server aslaa"));
