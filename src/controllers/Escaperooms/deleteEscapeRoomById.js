import EscapeRoom from "../../models/EscapeRoom.js";

export const deleteEscapeRoomById = async (req, res) => {
  const id = req.params.id;
  

   try {
    const escapeRoom = await EscapeRoom.destroy({
    where: {
      id: id,
    },
  });


    if (!escapeRoom) {
      return res.status(404).json({
        message: "EscapeRoom not found",
      });
    }

    return res.status(200).json({
      message: "Delete escapeRoom by ID",
      data: booking,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }

};
