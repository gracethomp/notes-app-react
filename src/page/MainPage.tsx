import { useSelector } from "react-redux";
import Table from "../components/table/Table";
import { Note } from "../types/Note";

interface RootState {
    notes: Note[];
}

export default function MainPage() {
    const notesHeaderCells: string[] = ["", "Name", "Created", "Category", "Content", "Dates", "", "", ""];
    type NoteKeys = (keyof Note)[];
    const notes = useSelector((state: RootState) => state.notes);
    return (
        <Table tableTitle="My Notes" headerCells={notesHeaderCells} data={notes}/>
    )
}