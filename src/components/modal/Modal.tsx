import { Note } from "../../types/Note"
import AcceptButton from "../buttons/AcceptButton"
import CancelButton from "../buttons/CancelButton"

interface ModalProps {
    modalTitle: string,
    modalText: string,
    acceptButtonText: string,
    note: Note
}

export default function Modal({ modalTitle, modalText, acceptButtonText, note }: ModalProps) {
    return (
        <div className="modal" id="myModal">
            <div className="modal-content">
                <h3 id="modalTitle">{modalTitle}</h3>
                <div id="modalContent">
                    <p>{modalText}</p>
                    {note !== undefined}
                    <input type="text" placeholder="Note Name" value="" className="form-control" />
                    <select className="form-select" aria-label="Default select example">
                        <option value="Task">Task</option>
                        <option value="Random Thought">Random Thought</option>
                        <option value="Idea">Idea</option>
                    </select>
                    <textarea className="form-control" placeholder="Content" />
                </div>
                <div className="modal-actions">
                    <AcceptButton text={acceptButtonText} />
                    <CancelButton/>
                </div>
            </div>
        </div>
    )
}