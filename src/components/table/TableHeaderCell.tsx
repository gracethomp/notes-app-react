interface TableHeaderCellProps {
    text : string;
}

export default function TableHeaderCell({text} : TableHeaderCellProps) {
    return (
        <th scope="col">{text}</th>
    )
}