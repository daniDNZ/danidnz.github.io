import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
    const [show, setShow] = useState(true);
    const handleDropdown = () => {
        const dropContent = document.querySelector('.dropdown-content');
        show
        ? dropContent.classList.add('show')
        : dropContent.classList.remove('show');
        setShow(!show);
    }

    const smoothScroll = (e) => {
        e.preventDefault();

        const element = document.querySelector(e.target.getAttribute('href'));
        element.scrollIntoView({block: 'end', behavior: 'smooth'});
    }

    return (
        <>
            <nav className="main-nav">
                <div className="nav-home">
                    <Link to="/">.dnz</Link>
                </div>
                <a href="#collapse" className="collapsebtn">
                    <div>
                        <span className="collapse-line line-1" />
                        <span className="collapse-line line-2" />
                        <span className="collapse-line line-3" />
                    </div>
                </a>
                <div id="collapse" className="collapse">
                    <div className="collapse-header">
                        <a href="#" id="closebtn">X</a>
                    </div>
                    <Link to="/">Home</Link>
                    <a href="#bio" onClick={smoothScroll}>Bio</a>
                    <div className="dropdown">
                        <button className="dropbtn" onClick={handleDropdown}>Proyectos</button>
                        <div className="dropdown-content">
                            <Link to="/pages_example">Pages Example</Link>
                            <Link to="/">Another Example</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
} 