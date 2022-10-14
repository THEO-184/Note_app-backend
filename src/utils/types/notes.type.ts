import mongoose from "mongoose";

export interface NotesInput {
	title: string;
	body: string;
}

export interface NotesDocument extends NotesInput, mongoose.Document {
	createdAt: Date;
	updatedAt: Date;
}
