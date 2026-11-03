import EscapeRoom from "../../models/EscapeRoom.js";

export const addEscapeRoom = async (req, res) => {
  const { id,name, description, difficulty, duration, maxPlayers } = req.body;

  await EscapeRoom.create({
    id,
    name,
    description,
    difficulty,
    duration,
    maxPlayers,
  });

  return res.status(201).json({
    message: "EscapeRoom created successfully!",
  });
};
