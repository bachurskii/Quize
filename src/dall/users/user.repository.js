import mongoose from "mongoose";
class UserRepository {
  constructor() {}
  async getByEmail(email) {
    // const res = await mongoose.model()
    console.log(mongoose);
  }
  createUser(user) {
    console.log(mongoose, "7");
    console.log(user);
  }
}

export default UserRepository;
