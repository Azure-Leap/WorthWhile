import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./config/db";

const app = express();
app.use(cors());
app.use(express.json());

const URI = process.env.URI || "";
const PORT = process.env.PORT || "";

connectDB(URI);

app.listen(PORT, () => console.log("WhorthWhile server aslaa"));
