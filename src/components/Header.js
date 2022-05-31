import { useEffect } from "react";
import { NavLink } from "react-bootstrap";
import Headline from "../components/Headline";
import { ReactComponent as Logo } from "../img/svg/logo.svg";
import { FaFingerprint } from "react-icons/fa";

export default function Header() {
  
  const changeTheme = () => {
    if(window.matchMedia('(prefers-color-scheme: dark)').matches ){
      return "#3E4C59";
    } else return"#e9e9ea";
  }
  let color = changeTheme();

  window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', () => color = changeTheme())

  const toggle = (id) => {
    const drop = document.querySelector(id);
    const header = document.querySelector(".header");

    if (!drop.classList.contains('show')) {
      drop.classList.add('show');
      header.style.backgroundColor = color;
    } else {
      drop.classList.remove('show');
      header.style.backgroundColor = "transparent";
    }
  }

  useEffect(() => {

    // Get Sticky
    const stickyElm = document.querySelector('.header');

    const observer = new IntersectionObserver( 
      ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1 && e.intersectionRatio > 0.95),
      {threshold: [1]}
    );

    observer.observe(stickyElm);

    // Detect the click to close menu
    window.onclick = (e) => {
      const clicked = e.target;
      if (!clicked.matches('.collapser__btn')) {
        const dropdowns = document.querySelectorAll('.nav__dropdown');
        const navCollapse = document.querySelector('.nav__collapse');
        const header = document.querySelector(".header");

        dropdowns.forEach((drop) => {
          if (drop.classList.contains('show'))
            drop.classList.remove('show');
        })

        if (navCollapse.classList.contains('show'))
          navCollapse.classList.remove('show');
          header.style.backgroundColor = "transparent";
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
              <figure className="figure" alt="Home">
                <Logo />
              </figure>
            </NavLink>
            <button className="nav__a a collapser__btn" aria-label="Despliega el menú" onClick={() => toggle('.nav__collapse')}>
              <FaFingerprint />
            </button>
          </div>
          <ul className="nav__ul nav__collapse">
            <li className="nav__li"><NavLink href="#works" className="nav__a nav__a--drop a" title="works">works</NavLink></li>
            <li className="nav__li"><NavLink href="#bio" className="nav__a nav__a--drop a" title="bio">about</NavLink></li>
            <li className="nav__li"><NavLink href="#contact" className="nav__a nav__a--drop a" title="contact">contact</NavLink></li>
          </ul>
        </nav>
      </header>
    </>
  )
} 