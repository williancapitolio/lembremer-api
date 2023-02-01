import { Router } from "express";

import {
    filter,
    update
} from "../controllers/prioritiesController.js";

const route = Router();

route.get("/", filter);
route.patch("/:id", update);

export default route;
