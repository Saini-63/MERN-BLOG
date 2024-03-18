import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb://localhost:27017/MERN-BLOG-PROJECT-WITH-SAHAND-YOUTUBE");
        console.log("Mongoose is Connected");
    }
    catch (err) {
        console.log("MOngoose Error")
        console.log(`Error: ${err.message}`);
    }
}

export default connectDB;