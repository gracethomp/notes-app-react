import TableHeader from "./TableHeader"
import TableRow from "./TableRow"

interface TableProps<T> {
    tableTitle: string,
    headerCells: string[],
    data: T[],
    columns: (keyof T)[]
}

export default function Table<T>({ tableTitle, headerCells, data, columns }: TableProps<T>) {
    return (
        <div className="table-section">
            <h2>{tableTitle}</h2>
            <table className="table">
                <TableHeader headerCells={headerCells} />
                <tbody>
                    {data.map((item, index) => (
                        <TableRow data={item} index={index} columns={columns} hasAction={true} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}