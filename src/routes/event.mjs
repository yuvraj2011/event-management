import express from "express";
import errorHandler from "../helpers/errorHandler.mjs";
import eventController from "../controllers/eventController.mjs";
import { auth } from "../middlewares/middleware.mjs";

const router = express.Router();

router.post("/create-event", auth, errorHandler(eventController.CreateEvent));

export default router;
