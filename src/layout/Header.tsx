import { useState } from "react";

interface HeaderProps {
    onNoteListClick: () => void,
    onArchiveClick: () => void
}

export default function Header({ onNoteListClick, onArchiveClick }: HeaderProps) {
    const [isArchiveSelected, setIsArchiveSelected] = useState<boolean>(false);

    const handleNotesListClick = () => {
        setIsArchiveSelected(false);
        onNoteListClick();
    }

    const handleArchiveClick = () => {
        setIsArchiveSelected(true);
        onArchiveClick();
    }

    return (
        <header className="p-3 mb-3 border-bottom">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <nav>
                        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                            <li className="active-notes-option">
                                <p className={"nav-link px-2 " + (!isArchiveSelected ? "link-secondary" : "link-body-emphasis")}
                                    onClick={() => handleNotesListClick()}>My Notes
                                </p>
                            </li>
                            <li className="archived-notes-option">
                                <p className={"nav-link px-2 " + (isArchiveSelected ? "link-secondary" : "link-body-emphasis")}
                                    onClick={() => handleArchiveClick()}>
                                    Archive
                                </p>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}