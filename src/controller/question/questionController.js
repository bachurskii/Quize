import express from "express";
class QuestionController {
  constructor(questionSercvices) {
    this.path = "/questions";
    this.router = express.Router();
    this.storage = {};
    this.initialisationRouter();
  }
  initialisationRouter() {
    this.router.get("/", this.question);
  }

  async question(req, res) {}
}
