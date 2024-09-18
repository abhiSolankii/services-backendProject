import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDb from "./lib/connectToDb.js";
import serviceRoutes from "./routes/service.routes.js";

dotenv.config();

const PORT = process.env.PORT || 4500;
const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/services", serviceRoutes);

app.listen(PORT, () => {
  connectToDb();
  console.log(`Server running on Port ${PORT}`);
});
