import React from "react";

interface CancelButtonProps {
    onClick: () => void;
}

export const CancelButton: React.FC<CancelButtonProps> = ({ onClick }) => {
    return (
        <button className="btn btn-light btn-outline-dark" onClick={onClick}>Cancel</button>
    )
}