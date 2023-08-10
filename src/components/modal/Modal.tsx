import React, { ChangeEvent, useState } from 'react';
import { Note } from "../../types/Note";
import { ClassicButton } from "../buttons/ClassicButton";
import { CancelButton } from "../buttons/CancelButton";
import { setHasForm, setModalText, setModalTitle } from '../../utils/modalSettingsUtil';
import Form from './Form';


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
        <div className="modal fixed flex justify-content-center align-items-center inset-0 flex items-center justify-center bg-opacity-50 bg-gray-500" id="myModal">
            <div className="p-3 bg-white rounded shadow-lg p-6 w-96 position-absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <h3 id="modalTitle" className="text-lg font-semibold mb-2">{modalSettings.modalTitle}</h3>
                <div id="modalContent">
                    <p>{modalSettings.modalText}</p>
                    {modalSettings.hasForm &&
                        <Form note={noteForm} handleNameChange={handleInputNameChange} handleCategoryChange={handleCategorySelectChange} handleContentChange={handleContentTextareaChange} />
                    }
                    {isWarnVisible &&
                        <p className='text-red-500'>Fill all fields!</p>
                    }
                </div>
                <div className="mt-4 flex justify-content-between">
                    <ClassicButton onClick={() => performAction()} text="Accept" />
                    <CancelButton onClick={() => handleModalClose()} />
                </div>
            </div>
        </div>
    )
}