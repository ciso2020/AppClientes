// Read environment variables
import { config } from "dotenv";
config();

//mongodb+srv://ciso2021:ciso2021@cluster0.7ukqs.mongodb.net/test
//"localhost"

const configurations = {
  PORT: process.env.PORT || 4000,
  secret: "ciso2020",
  MONGODB_HOST: process.env.MONGODB_HOST || "localhost",
  MONGODB_DATABASE: process.env.MONGODB_DB || "sistema-clientes",
  MONGODB_URI: `mongodb://${process.env.MONGODB_HOST || "localhost"}/${
    process.env.MONGODB_DATABASE || "sistema-clientes"
  }`,
};


export default configurations;
