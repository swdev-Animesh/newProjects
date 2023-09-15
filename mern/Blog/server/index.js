import express from "express";
import dotenv from "dotenv";
import Connection from "./database/db.js";
import router from "./routes/route.js";
const app = express();
dotenv.config();
app.use("/", router);

const username = process.env.DB_USERNAME;
const pass = process.env.DB_PASSWORD;
const PORT = 8000;
app.listen(PORT, () => console.log(`Server running on Port ${PORT} latest`));

Connection(username, pass);
