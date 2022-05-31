import { useEffect } from "react";
import { NavLink } from "react-bootstrap";
import Headline from "../components/Headline";
import { ReactComponent as Logo } from "../img/svg/logo.svg";
import { FaFingerprint } from "react-icons/fa";

export default function Header() {

  const toggle = (id) => {
    const drop = document.querySelector(id);

    !drop.classList.contains('show')
      ? drop.classList.add('show')
      : drop.classList.remove('show');
  }

  useEffect(() => {

    window.onclick = (e) => {
      const clicked = e.target;
      if (!clicked.matches('.drop-btn') && !clicked.matches('.collapser__btn')) {
        const dropdowns = document.querySelectorAll('.nav__dropdown');
        const navCollapse = document.querySelector('.nav__collapse');

        dropdowns.forEach((drop) => {
          if (drop.classList.contains('show'))
            drop.classList.remove('show');
        })

        if (navCollapse.classList.contains('show'))
          navCollapse.classList.remove('show');
      }

    }
  })

  return (
    <>
      <Headline />
      <header className="header">
        <nav className="nav">
          <div className="collapser">
            <NavLink to='/' className="nav__a a">
              <figure className="figure">
                <Logo />
              </figure>
            </NavLink>
            <button className="nav__a a collapser__btn" onClick={() => toggle('.nav__collapse')}>
              <FaFingerprint />
            </button>
          </div>
          <ul className="nav__ul nav__collapse">
            <li className="nav__li"><NavLink href="#works" className="nav__a a" title="works">works</NavLink></li>
            <li className="nav__li"><NavLink href="#bio" className="nav__a a" title="bio">about</NavLink></li>
            <li className="nav__li"><NavLink href="#contact" className="nav__a a" title="contact">contact</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  )
} 