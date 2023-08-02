import trash from "../../assets/trash.svg"
import archive from "../../assets/archive.svg"
import pen from "../../assets/pen.svg"
import TableCell from "../table/TableCell";

interface ActionGroupProps {
    handleEditClick: () => void,
    handleArchiveClick: () => void,
    handleRemoveClick: () => void,
}

export default function ActionGroup({ handleArchiveClick, handleEditClick, handleRemoveClick }: ActionGroupProps) {
    return (
        <>
            <TableCell content={<img src={archive} alt="archive note icon" className="action" onClick={handleArchiveClick}/>} />
            <TableCell content={<img src={pen} alt="pen note icon" className="action" onClick={handleEditClick} />} />
            <TableCell content={<img src={trash} alt="trash note icon" className="action" onClick={handleRemoveClick}/>} />
        </>
    )
}