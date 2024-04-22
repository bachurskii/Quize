import config from "../config/config.js";
import mongoose from "mongoose";
import User from "./User.js";
import Question from "./Question.js";

mongoose.model(User, new mongoose.Schema(User.schema));
mongoose.model(Question, new mongoose.Schema(Question.schema));
