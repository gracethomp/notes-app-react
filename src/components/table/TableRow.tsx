import { Category } from "../../types/Category";
import { Note } from "../../types/Note";
import ActionGroup from "../buttons/ActionsGroup";
import TableCell from "./TableCell";

interface TableRowProps<T> {
    data: T,
    columns: (keyof T)[],
    index: number,
    hasAction: boolean
}

export default function TableRow<T>({ data, columns, index, hasAction }: TableRowProps<T>) {
    return (
        <>
            <tr key={index}>
                {columns.map((column) => (
                    <TableCell text={data[column] as string} />
                ))}
                {hasAction &&
                    <ActionGroup />
                }
            </tr>
        </>
    );
}
// <tr key={data.id}>
// <TableCell text={data.name} />
// <TableCell text={data.timeOfCreation} />
// <TableCell text={data.noteCategory} />
// <TableCell text={data.noteContent} />
// <TableCell text={data.datesMentioned.join(", ")} />
// <ActionGroup />
// </tr>}