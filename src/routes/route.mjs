import express from "express";
import userController from "../controllers/userController.mjs";
import errorHandler from "../helpers/errorHandler.mjs";

const router = express.Router();

router.post("/register", errorHandler(userController.register));

router.post("/login", errorHandler(userController.login));

export default router;
