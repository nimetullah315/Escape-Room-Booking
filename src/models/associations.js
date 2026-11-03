import EscapeRoom from "./EscapeRoom.js";
import Booking from "./Booking.js";

EscapeRoom.hasMany(Booking, {
  foreignKey: "roomId",
});

Booking.belongsTo(EscapeRoom, {
  foreignKey: "roomId",
});
