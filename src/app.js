import "dotenv/config";
import express from "express";
import sequelize from "./config/database.js";
import escapeRoomRouter from "./routes/escapeRoomRouter.js";
import bookingRouter from "./routes/bookingRouter.js";
import "./models/associations.js";

export const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

sequelize.sync();

app.use("/api", escapeRoomRouter);
app.use("/api", bookingRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
