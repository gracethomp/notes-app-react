import React from "react";

interface TableHeaderCellProps {
    text: string;
}

export const TableHeaderCell: React.FC<TableHeaderCellProps> = ({ text }) => {
    return (
        <th className="px-12 py-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            {text}
        </th>
    )
}