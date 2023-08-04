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

export const removeNote = (note: Note) => ({
    type: REMOVE_NOTE,
    payload: note,
});

export const archiveNote = (note: Note) => ({
    type: ARCHIVE_NOTE,
    payload: note,
});

export const unarchiveNote = (note: Note) => ({
    type: UNARCHIVE_NOTE,
    payload: note,
});
