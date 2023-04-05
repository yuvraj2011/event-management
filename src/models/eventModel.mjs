import { DataTypes } from "sequelize";
import sequelize from "../services/db.mjs";
import User from './userModel.mjs'

const Event = sequelize.define("Event", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      eventName:{
        type: DataTypes.STRING,
      },
      eventDescription:{
        type: DataTypes.STRING,
      },
      startDate:{
        type: DataTypes.DATE,
      },
      endDate:{
        type: DataTypes.DATE,
      },
      venue: {
        type: DataTypes.STRING,
      },
      ownerId:{
        type: DataTypes.UUID,
        allowNull:false,
      }
});

Event.belongsTo(User, {foreignKey: "ownerId"});

export default Event;