import convict from "convict";
const config = convict({
  PORT: {
    doc: "The port to bind",
    default: 8000,
    env: "PORT",
  },
  HOST: {
    doc: "The host to bind",
    default: "http://localhost",
    env: "HOST",
  },
  DATA_BASE_URL: {
    doc: "The database connection",
    default:
      "mongodb+srv://georgijbacurskij:KtsFyBnhoA3EYrHY@cluster0.cjjvkmb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    env: "DATA_BASE_URL",
  },
});
export default config;
