import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
//import connectDB from '../config/mongooseConfig';

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Mongoose is Connected"))
    .catch((err) => console.log(err));

const app = express();

app.listen(3000, () => {
    console.log(`Server is Running on port 3000`);
})