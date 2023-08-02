import { Note } from "../../types/Note"

interface FormProps {
    note: Note
}

export default function Form({note} : FormProps) { //заглушка в коде
    return (
        <>
            <input type="text" placeholder="Note Name" value={note ? note.name : ""} className="form-control" />
            <select className="form-select" aria-label="Default select example">
                <option value="Task">Task</option>
                <option value="Random Thought">Random Thought</option>
                <option value="Idea">Idea</option>
            </select>
            <textarea className="form-control" placeholder="Content">{note ? note.noteContent : ""}</textarea>
        </>
    )
}