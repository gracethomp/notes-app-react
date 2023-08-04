import React from "react";

interface CancelButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const CancelButton: React.FC<CancelButtonProps> = ({ onClick }) => {
    return (
        <button className="btn btn-light btn-outline-dark" onClick={onClick}>Cancel</button>
    )
}