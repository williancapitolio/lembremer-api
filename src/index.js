import dotenv from "dotenv";
dotenv.config();

import express from "express";
import dbConnection from "./database/db.js";

const port = process.env.PORT || 3333;
const app = express();

dbConnection();

app.use(express.json());

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
