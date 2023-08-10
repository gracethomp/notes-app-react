import { useDispatch} from "react-redux";
import { addNote } from "../redux/actions/notesActions";
import { Note } from "../types/Note";
import { getCurrentTime } from "../utils/dateUtil";
import { archiveNote, editNote, removeNote, unarchiveNote } from "../redux/actions/notesActions";
import { decrementActive, decrementArchived, incrementActive, incrementArchived } from "../redux/actions/categoryActions";

export const useNoteActions = () => {
    const dispatch = useDispatch();

    const incrementActiveAndAddNote = (note:Note, category:string) => {
        dispatch(addNote({ ...note, timeOfCreation: getCurrentTime() }));
        dispatch(incrementActive(category));
    };

    const handleUnarchiveNote = (note: Note) => {
        dispatch(unarchiveNote(note));
        dispatch(incrementActive(note.category));
        dispatch(decrementArchived(note.category));
    }
    const handleArchiveNote = (note: Note) => {
        dispatch(archiveNote(note));
        dispatch(incrementArchived(note.category));
        dispatch(decrementActive(note.category));
    }

    const handleEditNote = (note: Note, showArchivedNotes : boolean, prevCategory : string) => {
        dispatch(editNote(note));
        if (note.category !== prevCategory) {
            dispatch(showArchivedNotes ? incrementArchived(note.category) : incrementActive(note.category));
            dispatch(showArchivedNotes ? decrementArchived(prevCategory) : decrementActive(prevCategory));
        }
    }

    const handleDeleteNote = (note: Note, showArchivedNotes : boolean) => {
        dispatch(removeNote(note));
        dispatch(showArchivedNotes ? decrementArchived(note.category) : decrementActive(note.category));
    }

    return { incrementActiveAndAddNote, handleUnarchiveNote, handleArchiveNote, handleEditNote, handleDeleteNote };
};