import { ReactNode } from 'react';

interface TableCellProps {
    content : string | ReactNode;
}

export default function TableCell ({content}:TableCellProps) {
    return (
        <td>{typeof content === 'string' ? (
            <p>{content}</p>
          ) : (
            content
          )}</td>
    )
}