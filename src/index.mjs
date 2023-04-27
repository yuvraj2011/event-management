import "dotenv/config";
import express from "express";
import cors from "cors";
import { globalErrorHandler } from "./middlewares/errorHandler.mjs";
import authRouter from "./routes/auth.mjs";
import eventRoute from "./routes/event.mjs"

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());

// Routes
app.use("/auth", authRouter);
app.use("/event",eventRoute);

//global error handler
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

