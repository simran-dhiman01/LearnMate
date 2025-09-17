import {User} from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'


const generateToken = (userId) => jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '24h' });
export const register = async (req,res)=>{
     try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.status(400).json({
                message: 'All fields are necessary.',
                success: false
            })
        }
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({
                message: 'User already exists.',
                success: false,
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword
        })
        return res.status(201).json({
            message: "Account created successfully.",
            success: true,
            user: {
                id: newUser._id,
                email: newUser.email,
                name: newUser.name
            }
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                message: 'All fields are necessary.',
                success: false
            })
        }
        const userExists = await User.findOne({ email });
        if (!userExists) {
            return res.status(404).json({
                message: 'Invalid credentials',
                success: false,
            })
        }
        const comparedPassword = await bcrypt.compare(password, userExists.password);
        if (!comparedPassword) {
            return res.status(400).json({
                message: 'Invalid credentials',
                success: false,
            })
        }
        const token = generateToken(userExists._id);
        
        return res.status(200).cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', })
            .json({
                message: `Welcome back ${userExists.name}`,
                userExists,
                token,
                success: true
            })
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}