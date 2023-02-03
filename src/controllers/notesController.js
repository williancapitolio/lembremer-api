import {
    createService,
    readService,
    eraseService,
    changeService
} from "../services/notesService.js";

export const create = async (req, res) => {
    try {
        const { title, text, priority } = req.body;
        if (!title || !text) {
            return res.status(400).json({ message: "Submit all fields!" });
        }
        await createService({
            title,
            text,
            priority
        });
        res.status(201).json({ message: "Created!" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const read = async (req, res) => {
    try {
        const notesList = await readService();
        res.status(200).json({ notesList });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const erase = async (req, res) => {
    try {
        const { id } = req.params;
        const noteDeleted = await eraseService(id);
        if (!noteDeleted) {
            return res.status(404).json({ message: "Note not found." });
        }
        res.status(200).json({ message: "Deleted!" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const change = async (req, res) => {
    try {
        const { id } = req.params;
        const { text } = req.body;
        const noteUpdated = await changeService(id);
        if (text) {
            noteUpdated.text = text;
            await noteUpdated.save();
        }
        res.status(200).json({ message: "OK", noteUpdated });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
