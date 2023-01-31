import { Router } from "express";

import {
    create,
    read,
    erase
} from "../controllers/notesController.js";

const route = Router();

route.post("/", create);
route.get("/", read);
route.delete("/:id", erase);

export default route;
