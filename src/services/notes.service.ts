import { FilterQuery, UpdateQuery } from 'mongoose';

// local imports
import error from '../errors';
import Notes from '../model/notes.model';
import { NotesDocument, NotesInput } from '../utils/types/notes.type';

export const createNoteService = async (input: NotesInput) => {
    const note = await Notes.create(input);

    return note;
};

export const getNotesService = async () => {
    const notes = await Notes.find({}).sort('-updatedAt -createdAt');
    return notes;
};

export const updateNoteService = async (
    filter: FilterQuery<NotesDocument>,
    update: UpdateQuery<NotesDocument>
) => {
    const note = await Notes.findOneAndUpdate(filter, update, {
        new: true,
        runValidators: true,
    });

    if (!note) {
        throw new error.NotFound('no note found with the given id');
    }

    return note;
};

export const deleteNoteService = async (filter: FilterQuery<NotesDocument>) => {
    const note = await Notes.findOneAndDelete(filter, {
        new: true,
        runValidators: true,
    });
    if (!note) {
        throw new error.NotFound('no note found with the given id');
    }
};
