import React from 'react';
import { TableHeaderCell } from "./TableHeaderCell";

interface TableHeaderProps {
    headerCells: string[];
}

export const TableHeader: React.FC<TableHeaderProps> = ({ headerCells }) => {
    return (
        <thead>
            <tr className="table-dark">
                {headerCells.map((column) =>
                    <TableHeaderCell text={column} />

                )}
            </tr>
        </thead>
    )
}