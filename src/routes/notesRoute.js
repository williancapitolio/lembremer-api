import { Router } from "express";

import {
    create
} from "../controllers/notesController.js";

const route = Router();

route.post("/", create);

export default route;