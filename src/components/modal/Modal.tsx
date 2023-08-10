import React, { ChangeEvent, useState } from 'react';
import { Note } from "../../types/Note";
import { AcceptButton } from "../buttons/AcceptButton";
import { CancelButton } from "../buttons/CancelButton";
import { setHasForm, setModalText, setModalTitle } from '../../utils/modalSettingsUtil';

type ModalSettings = {
    modalTitle: string,
    modalText: string,
    hasForm: boolean,
}

interface ModalProps {
    note: Note,
    handleModalClose: () => void,
    actionType: string,
    action: (note: Note) => void,
}

export const Modal: React.FC<ModalProps> = ({ note, handleModalClose, action, actionType }) => {
    const modalSettings: ModalSettings = {
        modalTitle: setModalTitle(actionType),
        modalText: setModalText(actionType),
        hasForm: setHasForm(actionType)
    };
    const [noteForm, setNoteForm] = useState<Note>(note);
    const [isWarnVisible, setIsWarnVisible] = useState<boolean>(false);

    const performAction = () => {
        if (modalSettings.hasForm && (noteForm.name === '' || noteForm.noteContent === '')) {
            setIsWarnVisible(true);
        } else {
            action(noteForm);
            handleModalClose();
        }
    }

    const handleInputNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNoteForm({ ...noteForm, name: e.target.value });
    }

    const handleCategorySelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setNoteForm({ ...noteForm, category: e.target.value });
    }

    const handleContentTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNoteForm({ ...noteForm, noteContent: e.target.value });
    }

    return (
        <div className="modal bg-blue" id="myModal">
            <div className="modal-content">
                <h3 id="modalTitle">{modalSettings.modalTitle}</h3>
                <div id="modalContent">
                    <p>{modalSettings.modalText}</p>
                    {modalSettings.hasForm &&
                        <>
                            <input type="text" placeholder="Note Name" value={noteForm?.name} className="form-control" onChange={handleInputNameChange} />
                            <select className="form-select" aria-label="Default select example" onChange={handleCategorySelectChange} value={noteForm?.category}>
                                <option value="Task">Task</option>
                                <option value="Random Thought">Random Thought</option>
                                <option value="Idea">Idea</option>
                            </select>
                            <textarea className="form-control" placeholder="Content" value={noteForm?.noteContent} onChange={handleContentTextareaChange}>{note?.noteContent}</textarea>
                        </>
                    }
                    {isWarnVisible &&
                        <p>Fill all fields!</p>
                    }
                </div>
                <div className="modal-actions">
                    <AcceptButton onClick={() => performAction()} text="Accept" />
                    <CancelButton onClick={() => handleModalClose()} />
                </div>
            </div>
        </div>
    )
}