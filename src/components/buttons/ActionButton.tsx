import React from "react"

interface ActionButtonProps {
    icon: string,
    alt: string,
    onClick: () => void
}

export const ActionButton: React.FC<ActionButtonProps> = ({ icon, alt, onClick }) => {
    return (
        <img src={icon} alt={alt + " note icon"} className="action" onClick={onClick} />
    );
}