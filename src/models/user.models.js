import mongoose, { Schema } from "mongoose";

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

export const User = mongoose.model('User', userschema);