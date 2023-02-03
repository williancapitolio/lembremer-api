import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import dbConnection from "./database/db.js";

import notesRoute from "./routes/notesRoute.js";
import prioritiesRoute from "./routes/prioritiesRoute.js";

const port = process.env.PORT || 3333;
const app = express();

var corsOptions = {
    origin: "http://localhost:5173",
    optionsSuccessStatus: 200
}

dbConnection();

app.use(cors(corsOptions));
app.use(express.json());
app.use("/notes", notesRoute);
app.use("/priorities", prioritiesRoute);

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
