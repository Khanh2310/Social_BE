import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { connectToDB } from './db/connectToDB.js';
import userRouter from './router/userRouter.js';
dotenv.config();
connectToDB();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // To parse JSON dta in the req.body
app.use(express.urlencoded({ extended: true })); // To parse form data in the req.body
app.use(cookieParser());

// Routes
app.use('/api/users', userRouter);
app.listen(PORT, () =>
  console.log(`Server started at https://localhost:${PORT}`)
);
