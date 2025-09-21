import React from 'react';

export default function NavBar() {
    return (
        <nav className="navbar rounded-box flex w-full  shadow-base-300/20 shadow-sm bg-[#000814] text-white">
            <div className="navbar-start max-md:w-1/4 p-4">
                <a className="link text-base-content link-neutral text-xl font-bold no-underline hover:text-gray-500 " href="/" title="inicio">
                    Inicio
                </a>
            </div>
            <div className="navbar p-4">
                <ul className="flex items-center space-x-4">
                    <li><a className="no-underline hover:text-gray-500" href="#" title="Enlace 1">Link 1</a></li>
                    <li><a className="no-underline hover:text-gray-500" href="#" title="Enlace 2">Link 2</a></li>
                    <li><a className="no-underline hover:text-gray-500" href="#" title="Enlace 3">Link 3</a></li>
                </ul>
            </div>
        </nav>
    );
}