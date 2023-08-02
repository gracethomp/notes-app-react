import ActionGroup from "../buttons/ActionsGroup";
import TableCell from "./TableCell";

interface TableRowProps {
    index: number,
    hasAction: boolean
}

export default function TableRow({ index, hasAction }: TableRowProps) {
    return (
        <>
            <tr key={index}>
                
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