import UserRepository from "../../dall/users/user.repository.js";
class UserServices {
  constructor() {
    this.userRepository = new UserRepository();
  }

  getUserByEmail(email) {
    console.log(1);
    return this.userRepository.getByEmail(email);
  }
  createUser(user) {
    return this.userRepository.createUser(user);
  }
}
export default UserServices;
