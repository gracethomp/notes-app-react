import React, { useState } from 'react';
import { TableHeaderCell } from "./TableHeaderCell";

interface TableHeaderProps {
    headerCells: string[];
}

export const TableHeader: React.FC<TableHeaderProps> = ({ headerCells }) => {
    return (
        <thead className="bg-gray-50">
            <tr>
                {headerCells.map((column, index) =>
                    <TableHeaderCell key={index} text={column} />
                )}
            </tr>
        </thead>
    )
}