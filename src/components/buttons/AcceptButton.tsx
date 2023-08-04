import React from 'react';

interface AcceptButtonProps {
    text: string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const AcceptButton: React.FC<AcceptButtonProps> = ({ text, onClick }) => {
    return (
        <button className="btn btn-dark" onClick={onClick}>
            {text}
        </button>
    );
};
