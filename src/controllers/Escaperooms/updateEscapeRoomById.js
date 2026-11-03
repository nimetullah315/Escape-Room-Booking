import EscapeRoom from "../../models/EscapeRoom.js";

export const updateEscapeRoomById = async (req, res) => {
  const { name, description, difficulty, duration, maxPlayers } = req.body;

  const id = req.params.id;
  const escapeRoom = await EscapeRoom.update(
    {name, description, difficulty, duration, maxPlayers},

    {
      where: {
        id: id,
      },
    },
  );

  res.status(200).json({
    message: "Escaperoom updated successfully.",
    data: escapeRoom,
  });
};
