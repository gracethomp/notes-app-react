import { useState } from 'react';
import { Note } from "../../types/Note"
import AcceptButton from "../buttons/AcceptButton"
import CancelButton from "../buttons/CancelButton"
import Form from "./Form"

interface ModalProps {
    modalTitle: string,
    modalText: string,
    acceptButtonText: string,
    note?: Note,
    hasForm: boolean,
    handleModalClose: () => void
}

export default function Modal({ modalTitle, modalText, acceptButtonText, note, hasForm, handleModalClose }: ModalProps) {
    const  [noteForm, setNoteForm] = useState<Note>();
    return (
        <div className="modal" id="myModal">
            <div className="modal-content">
                <h3 id="modalTitle">{modalTitle}</h3>
                <div id="modalContent">
                    <p>{modalText}</p>
                    {hasForm &&
                        <>
                            <input type="text" placeholder="Note Name" value={note ? note.name : ""} className="form-control" />
                            <select className="form-select" aria-label="Default select example">
                                <option value="Task">Task</option>
                                <option value="Random Thought">Random Thought</option>
                                <option value="Idea">Idea</option>
                            </select>
                            <textarea className="form-control" placeholder="Content">{note ? note.noteContent : ""}</textarea>
                        </>}
                </div>
                <div className="modal-actions">
                    <AcceptButton text={acceptButtonText} />
                    <CancelButton onClick={() => handleModalClose()}/>
                </div>
            </div>
        </div>
    )
}