import React from 'react';

interface AcceptButtonProps {
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const AcceptButton: React.FC<AcceptButtonProps> = ({ text, onClick }) => {
    return (
        <button
            type="button"
            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={onClick}
        >
            {text}
        </button>
    );
};
