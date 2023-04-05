import Event from "../models/eventModel.mjs";


export const eventCreate =  async({eventName, eventDescription, startDate, endDate, venue, userId}) => {
        const event =  await Event.create({eventName, eventDescription, startDate, endDate, venue, ownerId:userId});
        if(!event.dataValues)
        return { success: false, message: "email not found" }
return {success:true, message:'event created successfully'};
}

export const eventUpdate = async({id, eventName, eventDescription, startDate, endDate, venue, userId})=>{
    const event = await Event.findByPk(id);
    console.log(event,'==>>')
    if(!event)
    return { success: false, message: "event not found" }
    const updatedData = await Event.update(
        {
            eventName:eventName,
            eventDescription:eventDescription,
            startDate:startDate,
            endDate:endDate,
            venue:venue,
        },{ where: { id: id } }
    )
    console.log(updatedData);
    return { success: true}
}