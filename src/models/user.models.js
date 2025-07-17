import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import  jwt  from "jsonwebtoken";
const userschema = new Schema({
  Uername: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  fullname: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    index: true,
  },
  avatar: {
    type: String, //cloudnary URL
    required: true,
  },
  coverImage: {
    type: String,
    required: true,
  },
  watchHistory:[{
type: Schema.types.ObjectId, ref:"video"
  }],

  password: {
    type: String, //cloudnary URL
    required: [true,"Password is required"]
  },

  refreshToken:{
    type:String
  }
},
{timestamps:true});

userschema.pre("save", async function(next){
  // password encryption
  if(!this.modified("password")) return next()
  this.password = bcrypt.hash(this.password, 10)
  next()
})

userschema.methods.isPasswordcorrect = async function(password){
  return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      username: this.username,
    },
    process.env.ACCESS_TOKEN, // Secret key
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY, // Expiry duration
    }
  );
};


export const User = mongoose.model('User', userschema);