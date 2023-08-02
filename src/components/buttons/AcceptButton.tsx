interface AcceptButtonProps {
    text: string,
    onClick: () => void
}

export default function AcceptButton({text, onClick}: AcceptButtonProps) {
    return (
        <button className="btn btn-dark" onClick={onClick}>{text}</button>
    )
}