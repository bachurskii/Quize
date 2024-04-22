import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, optional: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// Create a class that can use the schema
class User {
  constructor(data) {
    this.model = mongoose.model("User", userSchema);
    this.instance = new this.model(data);
  }

  save() {
    return this.instance.save();
  }

  // Additional methods can be added here
}

export default User;

// class User extends mongoose.Model {
//   static get schema() {
//     return {
//       name: { type: String, required: true },
//       email: { type: String, required: true, unique: true },
//       age: { type: Number, optional: true },
//       password: { type: String, required: true },
//       createdAt: { type: Date, default: Date.now },
//     };
//   }
// }

// export default User;
