import React, { useState } from "react";

import { CategoryIcon } from "../icons/CategoryIcon";
import { ActionGroup } from "../buttons/ActionsGroup";
import { TableCell } from "./TableCell";
import { Modal } from "../modal/Modal";
import { Note } from "../../types/Note";
import { useNoteActions } from "../../hooks/notesActionHook";

interface TableRowProps<T> {
    item: T,
    hasAction: boolean,
    showArchivedNotes: boolean
}

export const TableRow = <T extends Record<string, any>>({ item, hasAction, showArchivedNotes }: TableRowProps<T>) => {
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [actionType, setActionType] = useState<string>("");

    const { handleUnarchiveNote, handleArchiveNote, handleEditNote, handleDeleteNote } = useNoteActions();

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
            return (note: Note) => handleEditNote(note, showArchivedNotes, item.category);
        } else {
            return (note: Note) => handleDeleteNote(note, showArchivedNotes);
        }
    }

    return (
        <>
            <tr>
                {item.category && <TableCell content={<CategoryIcon category={item.category} />} />}
                {Object.keys(item).map((key, index) => (
                    (key !== "id" && key !== "isArchived") && <TableCell key={index} content={item[key]} />
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