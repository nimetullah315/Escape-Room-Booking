import Booking from "../../models/Booking.js";
import EscapeRoom from "../../models/EscapeRoom.js";

export const createBooking = async (req, res) => {
  try {
    const { roomId, customerName, bookingDate, numberOfPlayers } = req.body;

    const escapeRoom = await EscapeRoom.findByPk(roomId);

    if (!escapeRoom) {
      return res.status(404).json({
        message: "EscapeRoom not found",
      });
    }

    
    const existingBooking = await Booking.findOne({
      where: {
        roomId,
        bookingDate,
      },
    });

    if (existingBooking) {
      return res.status(400).json({
        message: "This room is already booked at this time!",
      });
    }

   
    if (numberOfPlayers > escapeRoom.maxPlayers) {
      return res.status(400).json({
        message: "You cannot exceed the EscapeRoom capacity",
      });
    }

    await Booking.create({
      roomId,
      customerName,
      bookingDate,
      numberOfPlayers,
    });

    return res.status(201).json({
      message: "Booking created successfully!",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
