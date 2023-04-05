import Event from "../models/eventModel.mjs";
import { Op } from "sequelize";

export const eventCreate =  async({eventName, eventDescription, startDate, endDate, venue, userId}) => {
        const event =  await Event.create({eventName, eventDescription, startDate, endDate, venue, ownerId:userId});
        console.log(event)
return event;
}

export const findEvents = async ({limit,offset, sort, date, searchTerm})=>{
        const options = {where:{}}
        if(sort){
                options.order= [['startDate', sort]]
        }
        if(limit && offset){
                options.limit = limit;
                options.offset = offset
        }
        if(date){
                options.where.date = date
        }
        if(searchTerm){
                options.where[[Op.or]] = [{eventName:{[Op.like]:`%${searchTerm}%`}},{eventDescription:{[Op.like]:`%${searchTerm}%`}}]
        }
        const events = await Event.findAll(options);
        return events.map(event=>event.dataValues)
}