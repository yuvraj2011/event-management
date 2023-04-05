import Event from "../models/eventModel.mjs";


export const eventCreate =  async({eventName, eventDescription, startDate, endDate, venue, userId}) => {
        const event =  await Event.create({eventName, eventDescription, startDate, endDate, venue, ownerId:userId});
        console.log(event)
return event;
}