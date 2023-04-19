import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db";
import userRoute from "./Routes/userRoutes";
import businessRoute from "./Routes/businessRoutes";
import staffRoute from "./Routes/staffRoute";
import categoryRoute from "./Routes/categoryRoute";
import serviceRoute from "./Routes/serviceRoute";
import logger from "./middlewares/logger";
import error from "./middlewares/error";

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);

app.use("/users", userRoute);
app.use("/business", businessRoute);
app.use("/staffs", staffRoute);
app.use("/categories", categoryRoute);
app.use("/services", serviceRoute);

const URI = process.env.URI || "";
const PORT = process.env.PORT || "";

app.use(error);

connectDB(URI);

app.get("/", (req, res) => res.send("HELLO WW"));

app.listen(PORT, () => console.log("WhorthWhile server aslaa"));
