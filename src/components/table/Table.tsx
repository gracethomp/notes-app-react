import React from "react";

import { TableHeader } from "./TableHeader"
import { TableRow } from "./TableRow"
import { TableTitle } from "./TableTitle";

interface TableProps<T> {
    tableTitle: string,
    headerCells: string[],
    data: T[],
    hasActions: boolean,
    showArchivedNotes: boolean,
    handleAddClick?: () => void
}
export const Table = <T extends Record<string, any>>({ data, headerCells, hasActions, showArchivedNotes, tableTitle, handleAddClick }: TableProps<T>) => {
    return (
        <>
            <TableTitle hasAction={hasActions} tableTitle={tableTitle} handleAddClick={handleAddClick}/>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <TableHeader headerCells={headerCells} />
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((item) => (
                            <TableRow key={item.id} item={item} hasAction={hasActions} showArchivedNotes={showArchivedNotes} />
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}