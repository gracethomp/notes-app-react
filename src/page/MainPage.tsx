import { useDispatch, useSelector } from "react-redux";
import Table from "../components/table/Table";
import { Note } from "../types/Note";
import addIcon from "../assets/addNote.svg"
import Header from "../layout/Header";
import { Category } from "../types/Category";
import { useState } from "react";
import Modal from "../components/modal/Modal";
import { addNote } from "../redux/actions/notesActions";

interface RootState {
    notes: Note[],
    categories: Category[]
}

export default function MainPage() {
    const [id, setId] = useState<number>(8);
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [showArchivedNotes, setShowArchivedNotes] = useState<boolean>(false);

    const dispatch = useDispatch();

    const notesHeaderCells: any[] = ["", "Name", "Created", "Category", "Content", "Dates", "", <img src={addIcon} alt="add icon" onClick={() => setModalVisible(true)} className="action" />, ""];
    const notes = useSelector((state: RootState) => state.notes);

    const notesToDisplay = notes.filter((note) => note.isArchived === showArchivedNotes);

    const categoryHeaderCells: any[] = ["Icon", "Note Category", "Active", "Archived"];
    const categories = useSelector((state: RootState) => state.categories);

    return (
        <>
            <Header onNoteListClick={() => setShowArchivedNotes(false)} onArchiveClick={() => setShowArchivedNotes(true)} />
            <Table tableTitle="My Notes" headerCells={notesHeaderCells} data={notesToDisplay} hasActions={true} showArchivedNotes={showArchivedNotes}/>
            <Table tableTitle="Summary" headerCells={categoryHeaderCells} data={categories} hasActions={false} />
            {isModalVisible &&
                <Modal modalTitle="Add Note"
                    modalText="Fill all fields to create new note"
                    acceptButtonText="Create"
                    hasForm={true}
                    handleModalClose={() => setModalVisible(false)}
                    action={(note:Note) => {
                        dispatch(addNote(note));
                        setId(id + 1);
                    }}
                    id={id}
                />
            }
        </>
    )
}