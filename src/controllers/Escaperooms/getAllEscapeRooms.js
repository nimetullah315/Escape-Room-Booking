import EscapeRoom from "../../models/EscapeRoom.js";

export const getAllEscapeRoom = async (req, res) => {
  const escapeRoom = await EscapeRoom.findAll();

  res.status(200).json({
    message: "Get all escaperooms",
    data: escapeRoom,
  });
};
