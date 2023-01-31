import { Router } from "express";

import {
    create,
    read
} from "../controllers/notesController.js";

const route = Router();

route.post("/", create);
route.get("/", read);

export default route;
