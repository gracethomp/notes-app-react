import React from "react";

interface AcceptButtonProps {
    text: string,
}

export default function AcceptButton({text}: AcceptButtonProps) {
    return (
        <button className="btn btn-dark">{text}</button>
    )
}