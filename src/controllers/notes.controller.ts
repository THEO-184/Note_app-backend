import { StatusCodes } from 'http-status-codes';
import { RequestHandler } from 'express';

// local imports
import error from '../errors';
import {
    createNoteService,
    deleteNoteService,
    getNotesService,
    updateNoteService,
} from '../services/notes.service';
import { NotesInput } from '../utils/types/notes.type';

export const createNote: RequestHandler<{}, {}, NotesInput> = async (
    req,
    res
) => {
    const { body, title } = req.body;
    if (!body || !title) {
        throw new error.BadRequest('provide all fields');
    }

    const note = await createNoteService(req.body);

    res.status(StatusCodes.CREATED).json({ note });
};

export const getNotes: RequestHandler = async (req, res) => {
    const notes = await getNotesService();

    res.status(StatusCodes.OK).json({ count: notes.length, notes });
};

export const updateNotes: RequestHandler<
    { id: string },
    {},
    NotesInput
> = async (req, res) => {
    const { body, title } = req.body;
    if (!body || !title) {
        throw new error.BadRequest('provide all fields');
    }

    const note = await updateNoteService({ _id: req.params.id }, req.body);

    res.status(StatusCodes.OK).json({ note });
};

export const deleteNotes: RequestHandler<{ id: string }> = async (req, res) => {
    await deleteNoteService({ _id: req.params.id });

    res.status(StatusCodes.OK).json({ msg: 'deleted successfully' });
};
