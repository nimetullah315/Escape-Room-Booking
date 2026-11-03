import sequelize from "../config/database.js";
import { DataTypes } from "sequelize";


// Et escape room skal minimum ha:

// id
// name
// description
// difficulty
// duration
// maxPlayers

const EscapeRoom = sequelize.define(
  "EscapeRoom",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    difficulty: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    maxPlayers: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  },
  {
    tableName: "escaperoom",
    schema: "dbo",
    timestamps: false,
  },
);

//EscapeRoom.sync();

export default EscapeRoom;
