import { useSelector } from "react-redux";
import Table from "../components/table/Table";
import { Note } from "../types/Note";
import { AddNoteIcon } from "../utils/icons";
import Header from "../layout/Header";

interface RootState {
    notes: Note[];
}

export default function MainPage() {
    const notesHeaderCells: any[] = ["", "Name", "Created", "Category", "Content", "Dates", "", <AddNoteIcon />, ""];
    const notes = useSelector((state: RootState) => state.notes);
    return (
        <>
            <Header />
            <Table tableTitle="My Notes" headerCells={notesHeaderCells} data={notes} hasActions={true} />
        </>
    )
}