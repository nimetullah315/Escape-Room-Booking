import Booking from "../../models/Booking.js";

export const getAllBooking = async (req, res) => {
  const booking = await Booking.findAll();

  res.status(200).json({
    message: "Get all booking",
    data: booking,
  });
};
