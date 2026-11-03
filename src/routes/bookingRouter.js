import express from "express";
import { validate } from "../middleware/validate.js";
import { createBooking } from "../controllers/Bookings/createBooking.js";
import { createBookingSchema } from "../schemas/booking.create.schema.js";
import { deleteBookingById } from "../controllers/Bookings/deleteBookingById.js";
import { getBookingById } from "../controllers/Bookings/getBookingById.js";
import { getAllBooking } from "../controllers/Bookings/getAllBookings.js";

const router = express.Router();

router.get("/bookings", getAllBooking);
router.get("/bookings/:id", getBookingById);
router.delete("/bookings/:id", deleteBookingById);
router.post("/bookings", validate(createBookingSchema), createBooking);

export default router;
