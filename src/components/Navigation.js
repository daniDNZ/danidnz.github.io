import { useState } from "react";
// import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { RiMenu4Line } from "react-icons/ri";

export default function Navigation() {
    const [show, setShow] = useState(true);
    const handleDropdown = () => {
        const dropContent = document.querySelector('.dropdown__content');
        show
        ? dropContent.classList.add('show')
        : dropContent.classList.remove('show');
        setShow(!show);
    }

    return (
        <>
            <nav className="nav">
                <a href="#headline" className="nav__a nav__a--brand">.dnz</a>
                <a href="#collapse" className="nav__a collapse-btn" alt="menu">
                    <RiMenu4Line />
                </a>
                <div id="collapse" className="collapse">
                    <div className="collapse__header">
                        <a href="#" className="nav__a collapse__close-btn" alt="Close menu"><MdClose /></a>
                    </div>
                    <a href="#bio" className="nav__a">bio_</a>
                    <div className="dropdown">
                        <button className="nav__a dropdown__btn" onClick={handleDropdown}>works_</button>
                        <div className="dropdown__content">
                            <a href="#works" className="nav__a">/all</a>
                            <a href="https://danidnz.github.io/Marabu/" className="nav__a" target="_blank" ref="nofollow noopener noreferrer">/marabú</a>
                            {/* <Link to="/pages_example" className="nav__a">/example</Link>
                            <Link to="/" className="nav__a">/another_ex</Link> */}
                        </div>
                    </div>
                    <a href="#contact" className="nav__a">contact_</a>
                </div>
            </nav>
        </>
    )
} 