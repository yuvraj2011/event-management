import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { globalErrorHandler } from './helpers/errorHandler.mjs';
import sequelize from './services/db.js'; 

const app = express();

app.use(express.json());
app.use(cors());
app.use(globalErrorHandler);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
