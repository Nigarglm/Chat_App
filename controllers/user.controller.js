
import User from "../models/user.model.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const signIn= async(req,res)=>{}

export const signUp= async(req,res)=>{
    console.log(req.body)
    const {fullName, userName,password,confirmPassword} = req.body
     // Check empty fields
    if(!fullName || !userName || !password || !confirmPassword ){
        res.status(500).send({message:"Please fill all the fields"})
        return;
    }
    // Check password length
    if(password.length<8){
        res.status(500).send({message:"Password must be at least 8 characters long"})
        return;
    }
    // Check password
    if(password!==confirmPAssword){
        res.status(500).send({message:"Wrong password"})
        return;
    }
    // Check if user exists
    const existingUser =await User.findOne(userName)
    if(user){
        res.status(200).send({message:"User is alredy exists"})
        return;
    }
    const salt = bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password,salt)
    const newUser= await User.create({fullName,userName,password:hashedPassword})

    // Check user succesfully created
    if(!newUser){
        res.status(400).send({message:"Failed to create user"})
        return;
    }
    // Send back created user
    res.status(201).send({message:"User created successfully",data:newUser})

}

export const logOut= async(req,res)=>{}

