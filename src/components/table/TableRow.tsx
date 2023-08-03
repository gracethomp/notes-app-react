import { CategoryIcon } from "../icons/CategoryIcon";
import { ActionGroup } from "../buttons/ActionsGroup";
import { TableCell } from "./TableCell";
import { Modal } from "../modal/Modal";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Note } from "../../types/Note";
import { archiveNote, editNote, removeNote, unarchiveNote } from "../../redux/actions/notesActions";
import { decrementActive, decrementArchived, incrementActive, incrementArchived } from "../../redux/actions/categoryActions";

interface TableRowProps {
    item: any,
    hasAction: boolean,
    showArchivedNotes?: boolean
}

export const TableRow: React.FC<TableRowProps> = ({ item, hasAction, showArchivedNotes }) => {
    const dispatch = useDispatch();

    const [isEditModalVisible, setEditModalVisible] = useState<boolean>(false);
    const [isArchiveModalVisible, setArchiveModalVisible] = useState<boolean>(false);
    const [isDeleteModalVisible, setDeleteModalVisible] = useState<boolean>(false);

    const handleArchiveClick = (note: Note) => {
        if (showArchivedNotes) {
            dispatch(unarchiveNote(note));
            dispatch(incrementActive(note.category));
            dispatch(decrementArchived(note.category));
        } else {
            dispatch(archiveNote(note));
            dispatch(incrementArchived(note.category));
            dispatch(decrementActive(note.category));
        }
    }

    const handleEditClick = (note: Note) => {
        dispatch(editNote(note));
        if (note.category !== item.category) {
            dispatch(showArchivedNotes ? incrementArchived(note.category) : incrementActive(note.category));
            dispatch(showArchivedNotes ? decrementArchived(item.category) : decrementActive(item.category));
        }
    }

    const handleDeleteClick = (note: Note) => {
        dispatch(removeNote(note));
        dispatch(showArchivedNotes ? decrementArchived(note.category) : decrementActive(note.category));
    }

    return (
        <>
            <tr>
                {item.category && <TableCell content={<CategoryIcon category={item.category} />} />}
                {Object.keys(item).map((key) => (
                    (key !== "id" && key !== "isArchived") && <TableCell content={item[key]} />
                ))}
                {hasAction &&
                    <ActionGroup
                        handleArchiveClick={() => setArchiveModalVisible(true)}
                        handleEditClick={() => setEditModalVisible(true)}
                        handleRemoveClick={() => setDeleteModalVisible(true)}
                    />}
            </tr>
            {isEditModalVisible &&
                <Modal modalTitle="Edit Node"
                    modalText="Edit this node"
                    acceptButtonText="Accept changes"
                    hasForm={true}
                    note={item}
                    handleModalClose={() => setEditModalVisible(false)}
                    action={(note: Note) => handleEditClick(note)}
                    id={item["id"]}
                />
            }
            {isArchiveModalVisible &&
                <Modal modalTitle={(showArchivedNotes ? "Unarchive" : "Archive") + " Node"}
                    modalText={"Are you sure you want to " + (showArchivedNotes ? "unarchive" : "archive") + " this node?"}
                    acceptButtonText="Yes"
                    hasForm={false}
                    note={item}
                    handleModalClose={() => setArchiveModalVisible(false)}
                    action={(note: Note) => handleArchiveClick(note)}
                    id={item["id"]}
                />
            }
            {isDeleteModalVisible &&
                <Modal modalTitle="Delete Note"
                    modalText={"Are you sure you want to delete this node?"}
                    acceptButtonText="Yes"
                    hasForm={false}
                    note={item}
                    handleModalClose={() => setDeleteModalVisible(false)}
                    action={(note: Note) => handleDeleteClick(note)}
                    id={item["id"]}
                />
            }
        </>
    );
}