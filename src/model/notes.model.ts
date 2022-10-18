import { Schema, model } from "mongoose";

// local imports
import { NotesDocument } from "../utils/types/notes.type";

const NotesSchema = new Schema<NotesDocument>(
	{
		title: {
			type: String,
			unique: true,
			required: [true, "provide note title"],
			minlength: [3, "title must be atleast 4 chracters"],
			maxlength: [35, "title must be atmost 35 chracters"],
		},
		body: {
			type: String,
			required: [true, "provide note body"],
			minlength: [3, "title must be atleast 4 chracters"],
		},
	},
	{ timestamps: true }
);

const Notes = model<NotesDocument>("Note", NotesSchema);

export default Notes;
