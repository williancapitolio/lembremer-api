import { Router } from "express";

import { filter } from "../controllers/prioritiesController.js";

const route = Router();

route.get("/", filter);

export default route;
