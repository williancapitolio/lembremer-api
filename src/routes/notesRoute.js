import { Router } from "express";

import {
    create,
    read,
    erase,
    change
} from "../controllers/notesController.js";

const route = Router();

route.post("/", create);
route.get("/", read);
route.delete("/:id", erase);
route.patch("/:id", change);

export default route;
