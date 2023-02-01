import {
    filterService,
    updateService
} from "../services/prioritiesService.js";

export const filter = async (req, res) => {
    try {
        const priority = req.query;
        const priorityNotes = await filterService(priority);
        res.status(200).json({ message: "Filtered!", priorityNotes });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const update = async (req, res) => {
    try {
        const { id } = req.params;
        const updateNote = await updateService(id);
        if (updateNote.priority) {
            updateNote.priority = false;
        } else {
            updateNote.priority = true;
        }
        await updateNote.save();
        res.status(200).json({ message: "Updated!", updateNote });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
