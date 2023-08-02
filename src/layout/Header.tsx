import archive from "../img/archive.svg"

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
                                <img src={archive} alt="archive note icon" />
                            </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}