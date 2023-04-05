import { eventCreate, findEvents } from "../services/eventServices.mjs";

export const CreateEvent = async (req, res) => {
  const userId = req.user.id;
  const data = await eventCreate({...req.body, userId});
  if (!data.success) {
    const error = new Error(data.message);
    error.status = 500;
    throw error;
  }
  res.status(201).json({ data });
};


export const GetEvents = async (req, res)=>{
  const events = findEvents(req.params);
  res.status(200).json(events)

}
