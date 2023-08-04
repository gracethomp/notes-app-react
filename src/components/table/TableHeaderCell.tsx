import React from "react";

interface TableHeaderCellProps {
    text: string;
}

export const TableHeaderCell: React.FC<TableHeaderCellProps> = ({ text }) => {
    return (
        <th scope="col">{text}</th>
    )
}