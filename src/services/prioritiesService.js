import Notes from "../models/Notes.js";

export const filterService = (priority) => Notes.find(priority);

export const updateService = (id) => Notes.findOne({ _id: id });
