import { TaskIcon } from "../../utils/icons";
import CategoryIcon from "../CategoryIcon";
import ActionGroup from "../buttons/ActionsGroup";
import TableCell from "./TableCell";

interface TableRowProps {
    item: any,
    id: any,
    hasAction: boolean
}

export default function TableRow({ item, id, hasAction }: TableRowProps) {
    return (
        <>
            <tr key={id}>
                {item.category && <TableCell content={<CategoryIcon/>}/>}
                {Object.keys(item).map((key) => (
                    (key !== "id" && key !== "isArchived") && <TableCell content={item[key]} />
                ))}
                {hasAction && <ActionGroup />}
            </tr>
        </>
    );
}