import React, { ChangeEvent, useState } from 'react';
import { Note } from "../../types/Note"
import AcceptButton from "../buttons/AcceptButton"
import CancelButton from "../buttons/CancelButton"
import Form from "./Form"
import { ADD_NOTE } from '../../redux/actions/types';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { getCurrentTime } from '../../utils/dateUtil';

interface ModalProps {
    modalTitle: string,
    modalText: string,
    acceptButtonText: string,
    note?: Note,
    hasForm: boolean,
    handleModalClose: () => void
}

export default function Modal({ modalTitle, modalText, acceptButtonText, note, hasForm, handleModalClose }: ModalProps) {
    const dispatch = useDispatch();
    const [noteForm, setNoteForm] = useState<Note>(
        {
            id: 111,
            name: '',
            timeOfCreation: '',
            category: 'Task',
            noteContent: '',
            datesMentioned: [],
            isArchived: false,
        }
    );
    const [isWarnVisible, setIsWarnVisible] = useState<boolean>(false);

    const addNote = (note: Note) => {
        if (noteForm.name === '' || noteForm.noteContent === '') {
            setIsWarnVisible(true);
        } else {
            dispatch({ type: ADD_NOTE, payload: {...note, timeOfCreation: getCurrentTime()}});
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
        <div className="modal" id="myModal">
            <div className="modal-content">
                <h3 id="modalTitle">{modalTitle}</h3>
                <div id="modalContent">
                    <p>{modalText}</p>
                    {hasForm &&
                        <>
                            <input type="text" placeholder="Note Name" value={note?.name} className="form-control" onChange={handleInputNameChange} />
                            <select className="form-select" aria-label="Default select example" onChange={handleCategorySelectChange}>
                                <option value="Task">Task</option>
                                <option value="Random Thought">Random Thought</option>
                                <option value="Idea">Idea</option>
                            </select>
                            <textarea className="form-control" placeholder="Content" value={note?.noteContent} onChange={handleContentTextareaChange}>{note?.noteContent}</textarea>
                        </>}
                    {isWarnVisible &&
                        <p>Fill all fields!</p>
                    }
                </div>
                <div className="modal-actions">
                    <AcceptButton onClick={() => addNote(noteForm)} text={acceptButtonText} />
                    <CancelButton onClick={() => handleModalClose()} />
                </div>
            </div>
        </div>
    )
}