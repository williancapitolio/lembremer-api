import Notes from "../models/Notes.js";

export const createService = (body) => Notes.create(body);

export const readService = () => Notes.find();

export const eraseService = (id) => Notes.findOneAndDelete({ _id: id });

export const changeService = (id) => Notes.findOne({ _id: id });
