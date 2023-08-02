import trash from "../../assets/trash.svg"
import archive from "../../assets/archive.svg"
import pen from "../../assets/pen.svg"
import TableCell from "../table/TableCell";

export default function ActionGroup() {
    return (
        <>
            <TableCell content={<img src={archive} alt="archive note icon" className="action"/>}/>
            <TableCell content={<img src={pen} alt="pen note icon" className="action"/>}/>
            <TableCell content={<img src={trash} alt="trash note icon" className="action"/>}/>
        </>
    )
}