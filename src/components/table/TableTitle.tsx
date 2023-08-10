import { PlusIcon } from "@heroicons/react/24/outline";

interface TableTitleProps {
    tableTitle: string,
    hasAction: boolean,
    handleAddClick?: () => void
}

export const TableTitle = ({ tableTitle, hasAction, handleAddClick }: TableTitleProps) => {
    return (
        <div className="lg:flex lg:items-center lg:justify-between">
            <div className="min-w-0 flex-1">
                <h2 className="m-7 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">{tableTitle}</h2>
            </div>
            {hasAction && <div className="m-2 flex lg:ml-4 lg:mt-0">
                <span className="sm:ml-3">
                    <button
                        type="button"
                        className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        onClick={handleAddClick}
                    >
                        <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
                        Add new note
                    </button>
                </span>
            </div>}
        </div>)
}