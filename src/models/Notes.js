import mongoose from "mongoose";

const NotesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    priority: {
        type: Boolean,
        required: true,
        default: false
    }
}, { collection: "notes" });

const Notes = mongoose.model("Notes", NotesSchema);

export default Notes;
