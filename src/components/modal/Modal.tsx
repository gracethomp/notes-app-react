import React, { ChangeEvent, useState, Fragment } from 'react';
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
        <div className="modal fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-500" id="myModal">
            <div className="modal-content bg-white rounded shadow-lg p-6 w-96">
                <h3 id="modalTitle" className="text-lg font-semibold mb-2">{modalSettings.modalTitle}</h3>
                <div id="modalContent">
                    <p>{modalSettings.modalText}</p>
                    {modalSettings.hasForm &&
                        <>
                            <div>
                                <div className="relative mt-2 rounded-md shadow-sm">
                                    <input
                                        type="text"
                                        placeholder="Note Name"
                                        name="price"
                                        id="price"
                                        value={noteForm?.name}
                                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        onChange={handleInputNameChange}
                                    />
                                </div>
                            </div>
                            <div className='relative mt-2 rounded-md shadow-sm'>
                                <select className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" aria-label="Default select" onChange={handleCategorySelectChange} value={noteForm?.category}>
                                    <option value="Task">Task</option>
                                    <option value="Random Thought">Random Thought</option>
                                    <option value="Idea">Idea</option>
                                </select>
                            </div>

                            <div className="relative mt-2 rounded-md shadow-sm">
                                <textarea className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Content" value={noteForm?.noteContent} onChange={handleContentTextareaChange}>{note?.noteContent}</textarea>
                            </div>
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