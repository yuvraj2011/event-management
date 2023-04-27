import express from "express";
import errorHandler from "../middlewares/errorHandler.mjs";
import {
  CreateEvent,
  UpdateEvent,
  GetEvents,
  DeleteEvent,
} from "../controllers/eventController.mjs";
import { auth } from "../middlewares/middleware.mjs";

const router = express.Router();

router.post("/create-event", auth, errorHandler(CreateEvent));

router.patch("/update-event", auth, errorHandler(UpdateEvent));

router.get("/events", errorHandler(GetEvents));

router.delete("/delete-event", auth, errorHandler(DeleteEvent));

export default router;
