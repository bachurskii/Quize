import express from "express";
class AuthController {
  constructor(userServices) {
    this.path = "/auth";
    this.router = express.Router();
    this.storage = {};
    this.initialisationRouter();
  }
  initialisationRouter() {
    this.router.post("/login", this.loginJWT);
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
      const token = JWT.sign(
        {
          user_id: user.id,
          email: user.email,
          password: user.password,
        },
        this.privateKey,
        { expiresIn: "15m" }
      );
      const refresToken = JWT.sign({ token }, "refressecret", {
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
