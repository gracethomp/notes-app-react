import { Note } from "../../types/Note"
import AcceptButton from "../buttons/AcceptButton"
import CancelButton from "../buttons/CancelButton"
import Form from "./Form"

interface ModalProps {
    modalTitle: string,
    modalText: string,
    acceptButtonText: string,
    note: Note,
    hasForm: boolean
}

export default function Modal({ modalTitle, modalText, acceptButtonText, note, hasForm }: ModalProps) {
    return (
        <div className="modal" id="myModal">
            <div className="modal-content">
                <h3 id="modalTitle">{modalTitle}</h3>
                <div id="modalContent">
                    <p>{modalText}</p>
                    {hasForm && <Form note={note} />}
                </div>
                <div className="modal-actions">
                    <AcceptButton text={acceptButtonText} />
                    <CancelButton />
                </div>
            </div>
        </div>
    )
}