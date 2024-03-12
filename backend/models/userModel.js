import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from 'validator';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const schema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

//we can create our own methods using mongoose in addition to create,findOne,findById etc
//static signup method
schema.statics.signup = async function (email, password) {

  if (!email || !password) throw Error("All fields must be filled")
  if (!validator.isEmail(email)) throw Error("Email is not valid")
  if (!validator.isStrongPassword(password)) throw Error("Password not strong enough")

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use");
  }
  //passwords our hashed before sending them to DB
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });
  return user;
}

schema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error('All fields must be filled')
  }
  const user = await this.findOne({ email })
  if (!user) {
    throw Error('Email does not exist')
  }
  const match = await bcrypt.compare(password, user.password)
  if (!match) {
    throw Error('Incorrect password')
  }
  return user;
}

const model = mongoose.model("User", schema);
export default model;