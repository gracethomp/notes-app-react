import React from "react"

interface ActionButtonProps {
    icon: string,
    alt: string,
    onClick: React.MouseEventHandler<HTMLImageElement>;
}

export const ActionButton: React.FC<ActionButtonProps> = ({ icon, alt, onClick }) => {
    return (
        <img src={icon} alt={alt + " note icon"} className="cursor-pointer" onClick={onClick} />
    );
}