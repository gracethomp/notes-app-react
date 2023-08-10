import React from 'react';
import { TableHeaderCell } from "./TableHeaderCell";

interface TableHeaderProps {
    headerCells: string[];
}

export const TableHeader: React.FC<TableHeaderProps> = ({ headerCells }) => {
    return (
        <thead className="bg-gray-50">
            <tr>
                {headerCells.map((column) =>
                    <TableHeaderCell text={column} />
                )}
            </tr>
        </thead>
    )
}