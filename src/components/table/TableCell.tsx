import React from 'react';

import { ReactNode } from 'react';

interface TableCellProps {
    content: string | ReactNode;
}

export const TableCell: React.FC<TableCellProps> = ({ content }) => {
    return (
        <td className='px-6 py-4 whitespace-nowrap'>{typeof content === 'string' ? (
            <p>{content}</p>) :
            (content)}
        </td>
    )
}