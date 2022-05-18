import { useState } from "react";
import { Link } from "react-router-dom";

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
                <a href="#collapse" className="nav__a collapse-btn">
                    <span className="collapse-btn__line" />
                    <span className="collapse-btn__line" />
                    <span className="collapse-btn__line" />
                </a>
                <div id="collapse" className="collapse">
                    <div className="collapse__header">
                        <a href="#" className="collapse__close-btn">X</a>
                    </div>
                    <a href="#bio" className="nav__a">bio_</a>
                    <div className="dropdown">
                        <button className="nav__a dropdown__btn" onClick={handleDropdown}>works_</button>
                        <div className="dropdown__content">
                            <Link to="/pages_example" className="nav__a">/example</Link>
                            <Link to="/" className="nav__a">/another_ex</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
} 