import Booking from "../../models/Booking.js";

export const deleteBookingById = async (req, res) => {
  const id = req.params.id;

  try {
    const booking = await Booking.destroy({
      where: {
        id: id,
      },
    });

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found",
      });
    }

    return res.status(200).json({
      message: "Delete Booking by ID",
      data: booking,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
