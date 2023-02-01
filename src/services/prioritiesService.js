import Notes from "../models/Notes.js";

export const filterService = (priority) => Notes.find(priority);
