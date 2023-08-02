import CategoryIcon from "../icons/CategoryIcon";
import ActionGroup from "../buttons/ActionsGroup";
import TableCell from "./TableCell";
import Modal from "../modal/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Note } from "../../types/Note";
import { archiveNote, editNote, unarchiveNote } from "../../redux/actions/notesActions";

interface TableRowProps {
    item: any,
    hasAction: boolean,
    showArchivedNotes?: boolean
}

export default function TableRow({ item, hasAction, showArchivedNotes }: TableRowProps) {
    const dispatch = useDispatch();

    const [isEditModalVisible, setEditModalVisible] = useState<boolean>(false);
    const [isArchiveModalVisible, setArchiveModalVisible] = useState<boolean>(false);
    const [isDeleteModalVisible, setDeleteModalVisible] = useState<boolean>(false);

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
                    action={(note: Note) => dispatch(editNote(note))}
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
                    action={(note: Note) => dispatch(showArchivedNotes ? unarchiveNote(note) : archiveNote(note))}
                    id={item["id"]}
                />
            }
        </>
    );
}