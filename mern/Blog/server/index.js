import express from "express";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import router from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
const app = express();
dotenv.config();
app.use(cors());
app.use("/", router);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
const username = process.env.DB_USERNAME;
const pass = process.env.DB_PASSWORD;
const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on Port ${PORT} latest`));

Connection(username, pass);
