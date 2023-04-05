import Event from "../models/eventModel.mjs";
import { Op, where } from "sequelize";

export const eventCreate = async ({
  eventName,
  eventDescription,
  startDate,
  endDate,
  venue,
  userId,
}) => {
  const event = await Event.create({
    eventName,
    eventDescription,
    startDate,
    endDate,
    venue,
    ownerId: userId,
  });
  if (!event.dataValues) return { success: false, message: "email not found" };
  return { success: true, message: "event created successfully" };
};

export const eventUpdate = async ({
  id,
  eventName,
  eventDescription,
  startDate,
  endDate,
  venue,
  userId,
}) => {
  const event = await Event.findByPk(id);
  console.log(event, "==>>");
  if (!event) return { success: false, message: "event not found" };
  if (event.dataValues.ownerId !== userId)
    return { success: false, message: "prohibited" };
  const updatedData = await Event.update(
    {
      eventName: eventName,
      eventDescription: eventDescription,
      startDate: startDate,
      endDate: endDate,
      venue: venue,
    },
    { where: { id: id } }
  );
  console.log(updatedData);
  return { success: true };
};

export const findEvents = async ({ limit, offset, sort, date, searchTerm }) => {
  const options = { where: {} };
  if (sort) {
    options.order = [["startDate", sort]];
  }
  if (limit && offset) {
    options.limit = limit;
    options.offset = offset;
  }
  if (date) {
    options.where.date = date;
  }
  if (searchTerm) {
    options.where[[Op.or]] = [
      { eventName: { [Op.like]: `%${searchTerm}%` } },
      { eventDescription: { [Op.like]: `%${searchTerm}%` } },
    ];
  }
  const events = await Event.findAll(options);
  return events.map((event) => event.dataValues);
};

export const deleteEvent = async ({ id, userId }) => {
  const event = await Event.findByPk(id);
  console.log(event);
  if (!event) return { success: false, message: "event not found" };
  if (event.dataValues.ownerId !== userId)
    return { success: false, message: "prohibited" };
  const deleteEvent = await Event.destroy({ where: { id } });
  if (!deleteEvent) {
    return { success: false, message: "internal server error" };
  }
  return { success: true };
};
