import User from "../modal/user.modal.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/errorHandler.js";
export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password || username === '' || email === '' || password === '') {
        // return res.status(400).json({ message: 'All fields are required' });
        // const err = {
        //     statusCode: 400,
        //     message: 'All fields are required'
        // }

        next(errorHandler(false, 401, 'All fields are required'));
    }
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({
        username: username,
        email: email,
        password: hashedPassword
    })
    try {
        await newUser.save();
        //res.json({ message: "SignUp Successfully!" });
        // const data = {
        //     success: true,
        //     statusCode: 201,
        //     message: 'SignUp Successfull!'
        // }
        // next(data);
        next(errorHandler(true, 201, 'All SignUp Successfully!'));
    }
    catch (err) {
        // res.status(500).json({ message: error.message })
        console.log(err.statusCode + "in catch block");
        next(errorHandler(false, err.statusCode, err.message));
    }


}