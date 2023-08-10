import React, { useState } from "react";

import { CategoryIcon } from "../icons/CategoryIcon";
import { ActionGroup } from "../buttons/ActionsGroup";
import { TableCell } from "./TableCell";
import { Modal } from "../modal/Modal";
import { useDispatch } from "react-redux";
import { Note } from "../../types/Note";
import { archiveNote, editNote, removeNote, unarchiveNote } from "../../redux/actions/notesActions";
import { decrementActive, decrementArchived, incrementActive, incrementArchived } from "../../redux/actions/categoryActions";

interface TableRowProps<T> {
    item: T,
    hasAction: boolean,
    showArchivedNotes?: boolean
}

export const TableRow = <T extends Record<string, any>>({ item, hasAction, showArchivedNotes }: TableRowProps<T>) => {
    const dispatch = useDispatch();

    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [actionType, setActionType] = useState<string>("");

    const handleActionButtonClick = (currentAction: string) => {
        setModalVisible(true);
        setActionType(currentAction);
    }

    const chooseAction = (currentAction: string) => {
        const lowerCaseAction = currentAction.toLowerCase();
        if (lowerCaseAction === "unarchive") {
            return (note: Note) => handleUnarchiveNote(note);
        } else if (lowerCaseAction === "archive") {
            return (note: Note) => handleArchiveNote(note);
        } else if (lowerCaseAction === "edit") {
            return (note: Note) => handleEditNote(note);
        } else {
            return (note: Note) => handleDeleteNote(note);
        }
    }

    const handleUnarchiveNote = (note: Note) => {
        dispatch(unarchiveNote(note));
        dispatch(incrementActive(note.category));
        dispatch(decrementArchived(note.category));
    }

    const handleArchiveNote = (note: Note) => {
        dispatch(archiveNote(note));
        dispatch(incrementArchived(note.category));
        dispatch(decrementActive(note.category));
    }

    const handleEditNote = (note: Note) => {
        dispatch(editNote(note));
        if (note.category !== item.category) {
            dispatch(showArchivedNotes ? incrementArchived(note.category) : incrementActive(note.category));
            dispatch(showArchivedNotes ? decrementArchived(item.category) : decrementActive(item.category));
        }
    }

    const handleDeleteNote = (note: Note) => {
        dispatch(removeNote(note));
        dispatch(showArchivedNotes ? decrementArchived(note.category) : decrementActive(note.category));
    }

    return (
        <>
            <tr key={item.id}>
                {item.category && <TableCell content={<CategoryIcon category={item.category} />} />}
                {Object.keys(item).map((key) => (
                    (key !== "id" && key !== "isArchived") && <TableCell content={item[key]} />
                ))}
                {hasAction &&
                    <ActionGroup
                        handleArchiveClick={() => handleActionButtonClick(showArchivedNotes ? "Unarchive" : "Archive")}
                        handleEditClick={() => handleActionButtonClick("Edit")}
                        handleRemoveClick={() => handleActionButtonClick("Delete")}
                    />}
            </tr>
            {isModalVisible &&
                <Modal
                    note={item as unknown as Note}
                    handleModalClose={() => setModalVisible(false)}
                    action={chooseAction(actionType)}
                    actionType={actionType}
                />}
        </>
    );
}