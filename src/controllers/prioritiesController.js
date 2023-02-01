import { filterService } from "../services/prioritiesService.js";

export const filter = async (req, res) => {
    try {
        const priority = req.query;
        const priorityNotes = await filterService(priority);
        res.status(200).json({ message: "OK!", priorityNotes });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
