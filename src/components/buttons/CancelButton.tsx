interface CancelButtonProps {
    onClick: () => void;
}

export default function CancelButton({ onClick }: CancelButtonProps) {
    return (
        <button className="btn btn-light btn-outline-dark" onClick={onClick}>Cancel</button>
    )
}