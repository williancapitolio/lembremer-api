import { createService } from "../services/notesService.js";

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