import { useSelector } from "react-redux";
import Table from "../components/table/Table";
import { Note } from "../types/Note";
import { AddNoteIcon } from "../utils/icons";
import Header from "../layout/Header";
import { Category } from "../types/Category";

interface RootState {
    notes: Note[],
    categories: Category[]
}

export default function MainPage() {
    const notesHeaderCells: any[] = ["", "Name", "Created", "Category", "Content", "Dates", "", <AddNoteIcon />, ""];
    const notes = useSelector((state: RootState) => state.notes);

    const categoryHeaderCells: any[] =["Icon", "Note Category", "Active", "Archived"];
    const categories = useSelector((state: RootState) => state.categories);
    return (
        <>
            <Header />
            <Table tableTitle="My Notes" headerCells={notesHeaderCells} data={notes} hasActions={true} />
            <Table tableTitle="Summary" headerCells={categoryHeaderCells} data={categories} hasActions={false}/>
        </>
    )
}