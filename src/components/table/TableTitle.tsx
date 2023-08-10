import { PlusIcon } from "@heroicons/react/24/outline";
import { AcceptButton } from "../buttons/AcceptButton";

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
            {hasAction && handleAddClick && <div className="m-2 flex lg:ml-4 lg:mt-0">
                <span className="sm:ml-3">
                    <AcceptButton text={"Add new note"} onClick={() => handleAddClick()}/>
                </span>
            </div>}
        </div>)
}