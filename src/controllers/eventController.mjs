import {
  deleteEvent,
  eventCreate,
  eventUpdate,
  findEvents,
} from "../services/eventServices.mjs";

const CreateEvent = async (req, res) => {
  const userId = req.user.id;
  const data = await eventCreate({ ...req.body, userId });
  if (!data.success) {
    const error = new Error(data.message);
    error.status = 500;
    throw error;
  }
  res.status(201).json({ data });
};

const UpdateEvent = async (req, res) => {
  const userId = req.user.id;
  const data = await eventUpdate({ ...req.body, userId });
  if (!data.success) {
    const error = new Error(data.message);
    error.status = 500;
    throw error;
  }
  res.status(200).json({ data });
};

const GetEvents = async (req, res) => {
  const events = await findEvents(req.query);
  res.status(200).json(events);
};

const DeleteEvent = async (req, res) => {
  const userId = req.user.id;
  const event = await deleteEvent({ ...req.body, userId });
  if (!event.success) {
    const error = new Error(event.message);
    error.status = 500;
    throw error;
  }
  res.status(201).json({ event });
};

export { CreateEvent, UpdateEvent, GetEvents, DeleteEvent };
