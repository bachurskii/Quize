import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserServices from "../../bll/users/user.services.js";
class AuthController {
  constructor() {
    this.path = "/auth";
    this.router = express.Router();
    this.storage = {};
    this.userServices = new UserServices();
    this.registerJWT = this.registerJWT.bind(this);
    this.loginJWT = this.loginJWT.bind(this);
    this.initialisationRouter();
  }
  initialisationRouter() {
    this.router.post("/login", this.loginJWT);
    this.router.post("/signUp", this.registerJWT);
  }
  async registerJWT(req, res) {
    console.log(this.userServices, "hello");
    const { name, password, email, age } = req.body;

    const user = await this.userServices.getUserByEmail(email);
    if (user) {
      return res.status(409).send("This user is exist.Please logIn");
    }
    const increptedPassword = await bcrypt.hash(password, 10);
    const newUser = await this.userServices.createUser({
      name,
      email,
      age,
      password: increptedPassword,
    });
    const token = jwt.sign(
      {
        user_id: newUser.id,
        email: newUser.email,
      },
      this.privateKey,
      {
        expiresIn: "15m",
      }
    );
  }
  async loginJWT(req, res) {
    console.log(req, "dfdsf");

    const { email, password } = req.body;
    const user = await this.userServices.getUserByEmail(email);
    if (
      user &&
      user.password &&
      (await bcrypt.compare(password, user.password))
    ) {
      const token = jwt.sign(
        {
          user_id: user.id,
          email: user.email,
        },
        this.privateKey,
        { expiresIn: "15m" }
      );
      const refresToken = jwt.sign({ token }, "refressecret", {
        expiresIn: "15m",
      });
      this.storage[token] = refresToken;
      delete user.password;
      res.cookie(
        "token",
        { ...user, token },
        { maxAge: 900000, httpOnly: true }
      );
      return res.status(200).json({
        ...user,
        token,
        refresToken,
      });
    }
    res.status(400).send("Invalid credentials");
  }
}
export default AuthController;
