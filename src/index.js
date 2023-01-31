import dotenv from "dotenv";
dotenv.config();

import express from "express";
import dbConnection from "./database/db.js";

import notesRoute from "./routes/notesRoute.js";

const port = process.env.PORT || 3333;
const app = express();

dbConnection();

app.use(express.json());
app.use("/notes", notesRoute);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
