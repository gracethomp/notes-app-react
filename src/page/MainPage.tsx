import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Table } from "../components/table/Table";
import { Note } from "../types/Note";
import { Header } from "../layout/Header";
import { Category } from "../types/Category";
import { Modal } from "../components/modal/Modal";
import { useNoteActions } from "../hooks/notesActionHook";

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
    
    const { incrementActiveAndAddNote } = useNoteActions();

    const notesHeaderCells: any[] = ["", "Name", "Created", "Category", "Content", "Dates", "", "", ""];
    const notes = useSelector((state: RootState) => state.notes);

    const notesToDisplay = useMemo(() => notes.filter((note) => note.isArchived === showArchivedNotes), [notes, showArchivedNotes]);

    const categoryHeaderCells: any[] = ["Icon", "Note Category", "Active", "Archived"];
    const categories = useSelector((state: RootState) => state.categories);

    const handleAddNote = (note: Note) => {
        incrementActiveAndAddNote(note, note.category);
        setNewNote({ ...newNote, id: newNote.id + 1 });
    }

    return (
        <>
            <Header onNoteListClick={() => setShowArchivedNotes(false)} onArchiveClick={() => setShowArchivedNotes(true)} />
            <Table tableTitle={!showArchivedNotes ? "My Notes" : "Archive"} headerCells={notesHeaderCells} data={notesToDisplay}
                hasActions={true} showArchivedNotes={showArchivedNotes} handleAddClick={() => setModalVisible(true)} />
            <Table tableTitle="Summary" headerCells={categoryHeaderCells} data={categories} hasActions={false} showArchivedNotes/>
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