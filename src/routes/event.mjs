import express from "express";
import errorHandler from "../helpers/errorHandler.mjs";
import {CreateEvent, UpdateEvent, GetEvents} from "../controllers/eventController.mjs";
import { auth } from "../middlewares/middleware.mjs";

const router = express.Router();

router.post("/create-event", auth, errorHandler(CreateEvent));

router.post("/update-event", auth, errorHandler(UpdateEvent));
router.get('/events', errorHandler(GetEvents))
router.get('/events', errorHandler(GetEvents))
export default router;
