import CategoryIcon from "../icons/CategoryIcon";
import ActionGroup from "../buttons/ActionsGroup";
import TableCell from "./TableCell";
import Modal from "../modal/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Note } from "../../types/Note";
import { editNote } from "../../redux/actions/notesActions";

interface TableRowProps {
    item: any,
    id: any,
    hasAction: boolean
}

export default function TableRow({ item, id, hasAction }: TableRowProps) {
    const dispatch = useDispatch();

    const [isModalVisible, setModalVisible] = useState<boolean>(false);

    const handleClick = () => {
        setModalVisible(true);
    }

    return (
        <>
            <tr key={id}>
                {item.category && <TableCell content={<CategoryIcon category={item.category} />} />}
                {Object.keys(item).map((key) => (
                    (key !== "id" && key !== "isArchived") && <TableCell content={item[key]} />
                ))}
                {hasAction && <ActionGroup handleClick={() => handleClick()} />}
            </tr>
            {isModalVisible &&
                <Modal modalTitle="Edit"
                    modalText="Edit this node"
                    acceptButtonText="Accept changes"
                    hasForm={true}
                    note={item}
                    handleModalClose={() => setModalVisible(false)}
                    action={(note: Note) => dispatch(editNote(note))}
                />
            }
        </>
    );
}