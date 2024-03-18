import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

//import connectDB from '../config/mongooseConfig';
import userRoutes from '../routes/user.route.js';
import authRoutes from '../routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Mongoose is Connected"))
    .catch((err) => console.log(err));

const app = express();
app.use(express.json());


app.use('/user', userRoutes);
app.use('/auth', authRoutes);
app.use((error, req, res, next) => {
    const success = error.success || false;
    const statusCode = error.statusCode || 500;
    const message = error.message || 'Internal Server Error';
    res.status(statusCode).json({
        success,
        statusCode,
        message,
    })

})
app.listen(3000, () => {
    console.log(`Server is Running on port 3000`);
})

