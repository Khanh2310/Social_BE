import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRouter from './router/userRouter.js';
import connectToDB from './db/connectToDB.js';
import postsRouter from './router/postsRouter.js';
dotenv.config();
connectToDB();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // To parse JSON dta in the req.body
app.use(express.urlencoded({ extended: true })); // To parse form data in the req.body
app.use(cookieParser());

// routerUser
app.use('/api/users', userRouter);

// routerPost
app.use('/api/posts', postsRouter);
app.listen(PORT, () =>
  console.log(`Server started at http://localhost:${PORT}`)
);
