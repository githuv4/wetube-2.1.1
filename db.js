import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL2, {
  useNewUrlParser: true,
  useFindAndModify: true,
});

const db = mongoose.connection;

const hnadleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) =>
  console.log(`❌ Error on DB Connection:${error}`);

db.once("open", hnadleOpen);
db.on("error", handleError);
