import User from "../modal/user.modal.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { errorHandler } from "../utils/errorHandler.js";

// <=============   For Sign UP Controller ==============>

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
        next(errorHandler(true, 201, 'SignUp Successfully!'));
    }
    catch (err) {
        // res.status(500).json({ message: error.message })
        //console.log(err.statusCode + "in catch block");
        next(errorHandler(false, err.statusCode, err.message));
    }
}

// <=============   For Sign IN Controller ==============>

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password || email === '' || password === '') {
        next(errorHandler(false, 400, 'All fileds are required!'));
    }

    try {
        const validUser = await User.findOne({ email: email })
        if (!validUser) {
            return next(errorHandler(false, 404, 'User Not Found'));
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(false, 400, 'Invalid Credentials!'));
        }
        const token = jwt.sign(
            { userId: validUser._id }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc;

        res.status(200).cookie('access_token', token, {
            httpOnly: true
        }).json(rest);
    } catch (error) {
        next(false, error.statusCode, error.message);
    }
}

// <=============   For Google Sign IN Controller ==============>

export const google = async (req, res, next) => {
    const { name, email, googlePhotoUrl } = req.body;
    try {
        const user = await User.findOne({ email });
        if (user) {
            const token = jwt.sign(
                { id: user._id },
                process.env.JWT_SECRET
            );
            const { password, ...rest } = user._doc;
            res.status(200)
                .cookie('access_token', token, {
                    httpOnly: true,
                })
                .json(rest);
        } else {
            const generatedPassword =
                Math.random().toString(36).slice(-8) +
                Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
            const newUser = new User({
                username:
                    name.toLowerCase().split(' ').join('') +
                    Math.random().toString(9).slice(-4),
                email,
                password: hashedPassword,
                profilePicture: googlePhotoUrl,
            });
            await newUser.save();
            const token = jwt.sign(
                { id: newUser._id },
                process.env.JWT_SECRET
            );
            const { password, ...rest } = newUser._doc;
            res
                .status(200)
                .cookie('access_token', token, {
                    httpOnly: true,
                })
                .json(rest);
        }

    } catch (error) {
        next(error);
    }
}
