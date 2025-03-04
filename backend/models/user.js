const mongoose =  require("mongoose")

const UserSchema = new mongoose.Schema({

  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
    unique:true,
    trim:true,
  },
  password:{
    type:String,
    required:true,
  },
  photo:{
    type:String,
    required:false,
  },

},{timestamps:true})

const User = mongoose.models.Users || mongoose.model("Users", UserSchema);


module.exports = User;