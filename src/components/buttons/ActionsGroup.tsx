import React from "react";
import trash from "../../assets/trash.svg"
import archive from "../../assets/archive.svg"
import pen from "../../assets/pen.svg"
import { TableCell } from "../table/TableCell";
import { ActionButton } from "./ActionButton";

interface ActionGroupProps {
    handleEditClick: () => void,
    handleArchiveClick: () => void,
    handleRemoveClick: () => void,
}

export const ActionGroup: React.FC<ActionGroupProps> = ({ handleArchiveClick, handleEditClick, handleRemoveClick }) => {
    return (
        <>
            <TableCell content={<ActionButton icon={archive} alt={"archive"} onClick={handleArchiveClick} />} />
            <TableCell content={<ActionButton icon={pen} alt={"edit"} onClick={handleEditClick} />} />
            <TableCell content={<ActionButton icon={trash} alt={"trash"} onClick={handleRemoveClick} />} />
        </>
    )
}