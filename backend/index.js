const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/user");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

// app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//
mongoose.connect(process.env.MONGODB).then(()=>{
  console.log("Database connected...");
}).catch((err)=>{
  console.log(err);
})


app.post("/register", async(req,res)=>{
  const {name,email,password} = req.body;
  if(!name || !email || !password){
    res.status(400);
    throw new Error("All fields required");
  }
  const user = await User.findOne({email})
  if(user){
    res.status(400);
		throw new Error("User already exsist");
  }
  const newUser = await User.create({
    name,email,password
  })
  res.json({
    message : newUser
  })
  
})

const generateToken = (userId)=>{
 const payload = {userId};

 const token = jwt.sign(payload,"GAaafGafaafaaSafYaadfGB",{expiresIn:"5m"});

 return token;
}
app.post("/login", async(req,res)=>{
  const {email,password} = req.body;

  if(!email || !password){
    res.status(400).json({message:"All fields required"});
    return;
  }

  const user = await User.findOne({email});

  if(!user){
    res.status(400).json({message:"No user found"});
    return;
  }
  
  if(user.password != password){
      res.status(400).json({message:"password is invalid"});
      return;
  }

  // ALL GOOD SEND TOKEN
  const token = generateToken(user._id);
  res.status(200).json({token})
  
})


app.listen(3000,()=>{
  console.log("Server running at 3000")
})