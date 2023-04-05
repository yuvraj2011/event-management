import express from "express";
import { login, register } from "../controllers/userController.mjs";
import errorHandler from "../helpers/errorHandler.mjs";

const router = express.Router();

router.post("/register", errorHandler(register));

router.post("/login", errorHandler(login));

export default router;
