import React from "react";

import { TableHeader } from "./TableHeader"
import { TableRow } from "./TableRow"

interface TableProps {
    tableTitle: string,
    headerCells: string[],
    data: any[],
    hasActions: boolean,
    showArchivedNotes?: boolean
}

export const Table: React.FC<TableProps> = ({ tableTitle, headerCells, data, hasActions, showArchivedNotes }) => {
    return (
        <div className="table-section">
            <h2>{tableTitle}</h2>
            <table className="table">
                <TableHeader headerCells={headerCells} />
                <tbody>
                    {data.map((item) => (
                        <TableRow key={item.id} item={item} hasAction={hasActions} showArchivedNotes={showArchivedNotes} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}