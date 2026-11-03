import express from "express";
import { addEscapeRoom } from "../controllers/Escaperooms/addEscaperoom.js";
import { validate } from "../middleware/validate.js";
import { createEscapeRoomSchema } from "../schemas/escaperoom.add.schema.js";
import { getAllEscapeRoom } from "../controllers/Escaperooms/getAllEscapeRooms.js";
import { getEscapeRoomById } from "../controllers/Escaperooms/getEscapeRoomById.js";
import { updateEscapeRoomById } from "../controllers/Escaperooms/updateEscapeRoomById.js";
import { deleteEscapeRoomById } from "../controllers/Escaperooms/deleteEscapeRoomById.js";

const router = express.Router();


router.get("/rooms",getAllEscapeRoom);
router.get("/rooms/:id",getEscapeRoomById);
router.put("/rooms/:id",validate(createEscapeRoomSchema),updateEscapeRoomById);
router.delete("/rooms/:id",deleteEscapeRoomById);
router.post("/rooms",validate(createEscapeRoomSchema), addEscapeRoom);

export default router;
