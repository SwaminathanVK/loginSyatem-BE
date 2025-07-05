import User from '../Models/User.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import redisClient from '../Database/redis.js';


dotenv.config();
if (!process.env.JWT_SECRET) throw new Error('JWT secret not set in environment variables');

// Register a new user
export const register = async(req,res)=>{
    try {
        console.log("Incoming body:", req.body);

        const {name ,email,password,dateOfBirth,age,contactNumber} = req.body;
        if (!name || !email || !password || !dateOfBirth || !age || !contactNumber) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).json({message: 'User is already existt'})
        }

        const hashedpassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            name,
            email,
            password: hashedpassword,
            dateOfBirth,
            age,
            contactNumber
        });
        await newUser.save();
    
        return res.status(201).json({message: 'User registered successfully'});
        
    } catch (error) {
        console.error('Register Error:', error);
        return res.status(500).json({message: 'server error'});
    }

}

export const login = async(req,res)=>{
    try {
        const { email , password } = req.body;
        const user = await User.findOne({ email});

        if(!user) return res.status(400).json({message: 'User not found'});

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) return res.status(400).json({ message: 'Invalid credentials' });

        const token = jwt.sign({id:user.id}, process.env.JWT_SECRET, {expiresIn: '1d'});

        return res.status(200).json({ message: 'Login successfully',
            token,
            user:{ id: user._id,
                name: user.name,
                email: user.email,
                dateOfBirth: user.dateOfBirth,
                age: user.age,
                contactNumber: user.contactNumber
            }
        })
    } catch (error) {
        console.error('Login Error:', error);
        return res.status(500).json({ message: error.message });
    }
};