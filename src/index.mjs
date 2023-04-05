import "dotenv/config";
import express from "express";
import cors from "cors";
import { globalErrorHandler } from "./helpers/errorHandler.mjs";
import authRouter from "./routes/auth.mjs";
import eventRoute from "./routes/event.mjs"

const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/auth", authRouter);
app.use("/event",eventRoute);

//global error handler
app.use(globalErrorHandler);

app.listen(3000, () => {
  console.log("listening on port 3000");
});

