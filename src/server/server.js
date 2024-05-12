import express from "express";
import session from "express-session";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
// const server = fastify();

// server.register(fastifyStatic, {
//   root: join(__dirname, "../dist"),
// });

// server.setNotFoundHandler((_, relply) => {
//   return relply.sendFile('index.html');
// });

class App {
  constructor(controller, port, host) {
    this.__filename = fileURLToPath(import.meta.url);
    this.__dirname = dirname(this.__filename);
    this.app = express();
    this.port = port;
    this.host = host;
    this.initilatiaMiddlewar();
    this.setupRoutes(controller);
    this.serveStaticFiles();
    this.handleNotFound();
  }

  initilatiaMiddlewar() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  setupRoutes(controller) {
    // this.app.get("/", (req, res) => {
    //   res.send("Hello world");
    // });

    controller.forEach((elem) => {
      this.app.use(`/api${elem.path}`, elem.router);
    });
  }
  serveStaticFiles() {
    const pathToDist = join(this.__dirname, "../front-end/dist"); // Adjust the path according to your structure
    this.app.use(express.static(pathToDist));
  }

  handleNotFound() {
    const pathToDist = join(this.__dirname, "../front-end/dist");
    this.app.use((req, res) => {
      res.sendFile("index.html", { root: pathToDist });
    });
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`app listenint at the ${this.host}:${this.port}`);
    });
  }
}
export default App;
