import EscapeRoom from "../../models/EscapeRoom.js";

export const getEscapeRoomById = async (req, res) => {
  const id = req.params.id;

  try {
    const escapeRoom = await EscapeRoom.findByPk(id);

    if (!escapeRoom) {
      return res.status(404).json({
        message: "EscapeRoom not found",
      });
    }

    return res.status(200).json({
      message: "Get EscapeRoom by ID",
      data: escapeRoom,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};