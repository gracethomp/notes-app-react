import { Note } from "../../types/Note"
import TableHeader from "./TableHeader"
import TableRow from "./TableRow"

interface TableProps {
    tableTitle: string,
    headerCells: string[],
    data: any[]
}

export default function Table({ tableTitle, headerCells, data }: TableProps) {
    return (
        <div className="table-section">
            <h2>{tableTitle}</h2>
            <table className="table">
                <TableHeader headerCells={headerCells} />
                <tbody>
                    {data.map((item) => (
                        <tr>
                            {Object.keys(item).map((key) => (
                                <td key={key}>{key !== "id" ? item[key] : ""}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}