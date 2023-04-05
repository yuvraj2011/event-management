import "dotenv/config";
import express from "express";
import cors from "cors";
import { globalErrorHandler } from "./helpers/errorHandler.mjs";
import sequelize from "./services/db.mjs";
import router from "./routes/route.mjs";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", router);
app.use(globalErrorHandler);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
