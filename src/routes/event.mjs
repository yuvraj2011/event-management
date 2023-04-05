import express from "express";
import errorHandler from "../helpers/errorHandler.mjs";
import {CreateEvent, GetEvents} from "../controllers/eventController.mjs";
import { auth } from "../middlewares/middleware.mjs";

const router = express.Router();

router.post("/create-event", auth, errorHandler(CreateEvent));



router.get('/events', errorHandler(GetEvents))
export default router;
