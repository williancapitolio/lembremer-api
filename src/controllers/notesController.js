import {
    createService,
    readService
} from "../services/notesService.js";

export const create = async (req, res) => {
    try {
        const { title, text, priority } = req.body;
        if (!title || !text || !priority) {
            res.status(400).json({ message: "Submit all fields!" });
        }
        await createService({
            title,
            text,
            priority
        });
        res.status(201).json({ message: "Created!" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const read = async (req, res) => {
    try {
        const notesList = await readService();
        res.status(200).json({ message: notesList });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
