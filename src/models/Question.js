import mongoose from "mongoose";
const questionSchema = new mongoose.Schema({
  category: { type: String, required: true },
  question: { type: String, required: true },
  answers: { type: [String || Number], required: true },
  correctAnswer: { type: String || Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create a class that can use the schema
class Question {
  constructor(data) {
    this.model = mongoose.model("Questin", questionSchema);
    this.instance = new this.model(data);
  }

  save() {
    return this.instance.save();
  }

  // Additional methods can be added here
}

export default Question;
