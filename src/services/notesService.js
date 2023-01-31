import Notes from "../models/Notes.js";

export const createService = (body) => Notes.create(body);

export const readService = () => Notes.find();
