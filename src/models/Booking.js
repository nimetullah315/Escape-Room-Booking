import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";



// id
// roomId
// customerName
// bookingDate
// numberOfPlayers

const Booking = sequelize.define(
  "Booking",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    roomId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
  model: {
    tableName: "escaperoom",
    schema: "dbo",
  },
  key: "id",
},
  },
    customerName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

   bookingDate: {
  type: DataTypes.DATEONLY,
  allowNull: false,
},
    numberOfPlayers: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  },
  {
    tableName: "booking",
    schema: "dbo",
    timestamps: false,
  },
);

//Booking.sync();

export default Booking;
