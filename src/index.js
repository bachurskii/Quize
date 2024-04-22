import config from "./config/config.js";
import App from "./server/server.js";
import mongoose from "mongoose";
import AuthController from "./controller/auth/authController.js";
import User from "./models/User.js";
import Question from "./models/Question.js";
const DATA_BASE_URL = config.get("DATA_BASE_URL");
const PORT = config.get("PORT");
const HOST = config.get("HOST");

const init = async (PORT, HOST) => {
  console.log(DATA_BASE_URL, 644);
  mongoose.connect(DATA_BASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "Connection error:"));
  db.once("open", () => {
    console.log("Successful connection to MongoDB");
  });
  // const newUser = new User({
  //   name: "John Doe",
  //   email: "John.doe@example.com",
  //   age: 30,
  //   password: "123123213",
  // });

  // newUser
  //   .save()
  //   .then((doc) => console.log("User created:", doc))
  //   .catch((err) => console.error("Error creating user:", err));
  // const newQuestion = new Question({
  //   category: "history",
  //   question: "When started WW2?",
  //   answers: [123, 123, 12, 1939],
  //   correctAnswer: "1939",
  // });

  // newQuestion
  //   .save()
  //   .then((doc) => console.log("Question created:", doc))
  //   .catch((err) => console.error("Error creating user:", err));

  // Instantiate and start the server
  const app = new App([new AuthController()], PORT, HOST);
  app.listen();
};

init(PORT, HOST);
