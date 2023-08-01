import { ADD_NOTE, EDIT_NOTE, REMOVE_NOTE, ARCHIVE_NOTE, UNARCHIVE_NOTE } from "./types";
import { Note } from "../../types/Note";

export const addNote = (note: Note) => ({
    type: ADD_NOTE,
    payload: note,
});

export const editNote = (note: Note) => ({
    type: EDIT_NOTE,
    payload: note,
});

export const removeNote = (noteId: string) => ({
    type: REMOVE_NOTE,
    payload: noteId,
});

export const archiveNote = (noteId: string) => ({
    type: ARCHIVE_NOTE,
    payload: noteId,
});

export const unarchiveNote = (noteId: string) => ({
    type: UNARCHIVE_NOTE,
    payload: noteId,
});
