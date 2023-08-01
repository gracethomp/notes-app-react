import TableHeader from "./TableHeader"

interface TableProps {
    headerCells: string[]
}

export default function Table({headerCells}:TableProps) {
    return (
        <table className="table">
            <TableHeader headerCells={headerCells}/>
            <tbody></tbody>
        </table>
    )
}