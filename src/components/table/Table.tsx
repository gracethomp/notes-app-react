import React from "react";

import { TableHeader } from "./TableHeader"
import { TableRow } from "./TableRow"
import { CheckIcon } from "@heroicons/react/24/outline";

interface TableProps<T> {
    tableTitle: string,
    headerCells: string[],
    data: T[],
    hasActions: boolean,
    showArchivedNotes?: boolean
}
export const Table = <T extends Record<string, any>>({ data, headerCells, hasActions, showArchivedNotes, tableTitle }: TableProps<T>) => {
    return (
        <>
            <div className="lg:flex lg:items-center lg:justify-between">
                <div className="min-w-0 flex-1">
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">{tableTitle}</h2>
                </div>
                <div className="m-2 flex lg:ml-4 lg:mt-0">
                    <span className="sm:ml-3">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            <CheckIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                            Publish
                        </button>
                    </span>
                </div>
            </div>
            <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
                <TableHeader headerCells={headerCells} />
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((item) => (
                        <TableRow item={item} hasAction={hasActions} showArchivedNotes={showArchivedNotes} />
                    ))}
                </tbody>
            </table>
            </div>
            
        </>

        // <div className="table-section">
        //     <h2 className="text-3xl font-bold underline">{tableTitle}</h2>
        //     <table className="table">
        //         <TableHeader headerCells={headerCells} />
        //         <tbody>
        //             {data.map((item) => (
        //                 <TableRow key={item.id} item={item} hasAction={hasActions} showArchivedNotes={showArchivedNotes} />
        //             ))}
        //         </tbody>
        //     </table>
        // </div>
    )
}