import TableHeader from "./TableHeader"
import TableRow from "./TableRow"

interface TableProps {
    tableTitle: string,
    headerCells: string[],
    data: any[],
    hasActions: boolean
}

export default function Table({ tableTitle, headerCells, data, hasActions }: TableProps) {
    return (
        <div className="table-section">
            <h2>{tableTitle}</h2>
            <table className="table">
                <TableHeader headerCells={headerCells} />
                <tbody>
                    {data.map((item) => (
                        <TableRow item={item} id={item["id"]} hasAction={hasActions}/>
                    ))}
                </tbody>
            </table>
        </div>
    )
}