import TableHeaderCell from "./TableHeaderCell";

interface TableHeaderProps {
    headerCells : string[];
}

export default function TableHeader({headerCells} : TableHeaderProps) {
    return (
        <thead>
            <tr className="table-dark">
                {headerCells.map( (column) =>
                    <TableHeaderCell text={column}/>
                )}
            </tr>
        </thead>
    )
}