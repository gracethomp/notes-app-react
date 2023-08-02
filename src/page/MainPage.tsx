import { useDispatch, useSelector } from "react-redux";
import Table from "../components/table/Table";
import { Note } from "../types/Note";
import addIcon from "../assets/addNote.svg"
import Header from "../layout/Header";
import { Category } from "../types/Category";
import { useState } from "react";
import Modal from "../components/modal/Modal";
import { ADD_NOTE } from "../redux/actions/types";

interface RootState {
    notes: Note[],
    categories: Category[]
}

export default function MainPage() {
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [modalTitle, setModalTitle] = useState<string>('');
    const [modalText, setModalText] = useState<string>('');
    const [acceptButtonText, setAcceptButtonText] = useState<string>('');
    const [hasForm, setHasForm] = useState<boolean>(false);

    const notesHeaderCells: any[] = ["", "Name", "Created", "Category", "Content", "Dates", "", <img src={addIcon} alt="add icon" onClick={() => handleAddActionClick()} />, ""];
    const notes = useSelector((state: RootState) => state.notes);

    const categoryHeaderCells: any[] = ["Icon", "Note Category", "Active", "Archived"];
    const categories = useSelector((state: RootState) => state.categories);

    const handleAddActionClick = () => {
        setModalTitle("Add Note");
        setModalText("Fill all fields to create new note");
        setAcceptButtonText("Create");
        setHasForm(true);
        setModalVisible(true);
    }

    return (
        <>
            <Header />
            <Table tableTitle="My Notes" headerCells={notesHeaderCells} data={notes} hasActions={true} />
            <Table tableTitle="Summary" headerCells={categoryHeaderCells} data={categories} hasActions={false} />
            {isModalVisible &&
                <Modal modalTitle={modalTitle}
                    modalText={modalText}
                    acceptButtonText={acceptButtonText}
                    hasForm={hasForm}
                    handleModalClose={() => setModalVisible(false)}
                />
            }
        </>
    )
}