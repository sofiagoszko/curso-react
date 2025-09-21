import React from 'react';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
            <div className="container-fluid">
                <a className="navbar-brand fw-bold me-2" href="/" title="inicio">
                    Inicio
                </a>
            
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item ms-2">
                            <a className="nav-link" href="#" title="Enlace 1">
                                Link 1
                            </a>
                        </li>
                        <li className="nav-item ms-2">
                            <a className="nav-link" href="#" title="Enlace 2">
                                Link 2
                            </a>
                        </li>
                        <li className="nav-item ms-2">
                            <a className="nav-link" href="#" title="Enlace 3">
                                Link 3
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}