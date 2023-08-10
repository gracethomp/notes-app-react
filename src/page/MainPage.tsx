import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "../components/table/Table";
import { Note } from "../types/Note";
import addIcon from "../assets/addNote.svg"
import Header from "../layout/Header";
import { Category } from "../types/Category";
import { Modal } from "../components/modal/Modal";
import { addNote } from "../redux/actions/notesActions";
import { incrementActive } from "../redux/actions/categoryActions";
import { ActionButton } from "../components/buttons/ActionButton";
import { getCurrentTime } from "../utils/dateUtil";

interface RootState {
    notes: Note[],
    categories: Category[]
}

const initialNote: Note = {
    id: 8,
    name: "",
    timeOfCreation: "",
    category: "Task",
    noteContent: "",
    datesMentioned: "",
    isArchived: false
}

export const MainPage: React.FC = () => {
    const [newNote, setNewNote] = useState<Note>(initialNote);
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [showArchivedNotes, setShowArchivedNotes] = useState<boolean>(false);

    const dispatch = useDispatch();

    const notesHeaderCells: any[] = ["", "Name", "Created", "Category", "Content", "Dates", "", <ActionButton icon={addIcon} alt={"add"} onClick={() => setModalVisible(true)} />, ""];
    const notes = useSelector((state: RootState) => state.notes);

    const notesToDisplay = useMemo(() => notes.filter((note) => note.isArchived === showArchivedNotes), [notes, showArchivedNotes]);

    const categoryHeaderCells: any[] = ["Icon", "Note Category", "Active", "Archived"];
    const categories = useSelector((state: RootState) => state.categories);

    const handleAddNote = (note: Note) => {
        dispatch(addNote({ ...note, timeOfCreation: getCurrentTime() }));
        dispatch(incrementActive(note.category));
        setNewNote({ ...newNote, id: newNote.id + 1 });
    }

    return (
        <>
            <Header />
            {/* <Header onNoteListClick={() => setShowArchivedNotes(false)} onArchiveClick={() => setShowArchivedNotes(true)} /> */}
            <Table tableTitle="My Notes" headerCells={notesHeaderCells} data={notesToDisplay} hasActions={true} showArchivedNotes={showArchivedNotes} />
            <Table tableTitle="Summary" headerCells={categoryHeaderCells} data={categories} hasActions={false} />
            {isModalVisible &&
                <Modal note={newNote}
                    handleModalClose={() => setModalVisible(false)}
                    action={(note: Note) => handleAddNote(note)}
                    actionType="Add"
                />
            }
        </>
    )
}