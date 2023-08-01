import React from "react";

export default function Header() {
    return (
    <header className="p-3 mb-3 border-bottom">
        <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <nav>
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li className="active-notes-option"><a href="/" className="nav-link px-2 link-secondary">My Notes</a>
                        </li>
                        <li className="archived-notes-option"><a href="/" className="nav-link px-2 link-body-emphasis">Archive
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-archive" viewBox="0 0 16 16">
                                <path
                                    d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>);
}