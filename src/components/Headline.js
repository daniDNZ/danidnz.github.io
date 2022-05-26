import { BsLinkedin, BsGithub } from "react-icons/bs";
import dPic from "../img/dPic.webp";
import { ReactComponent as Line } from "../img/svg/line.svg";
import { ReactComponent as Box } from "../img/svg/box.svg";
import { ReactComponent as YellowWave } from "../img/svg/yellowWave.svg";

export default function Headline() {


    return (
        <>
            <div className="section section--headline" id="headline">
                <div className="squares">
                    <div className="squares__div squares__div--2"></div>
                    <div className="squares__div squares__div--3"></div>
                    <div className="squares__div squares__div--4"></div>
                </div>
                <section className="headline__section">
                    <div className="squares__div squares__div--1"></div>

                    <h2 className="headline__h2">Dani Sanz</h2>
                    <h3 className="headline__h3">Frontend<br/>Developer</h3>

                    <ul className="h-menu">
                        <li className="h-menu__li"><a href="#works" className="h-menu__a" title="works">works</a></li>
                        <li className="h-menu__li"><a href="#bio" className="h-menu__a" title="bio">about</a></li>
                        <li className="h-menu__li"><a href="#contact" className="h-menu__a" title="contact">contact</a></li>
                    </ul>

                    <Box />

                    <ul className="headline__ul">
                        <li className="headline__li"><a href="#" className="headline__a" title="LinkedIn">LinkedIn</a></li>
                        <li className="headline__li"><a href="#" className="headline__a" title="GitHub">GitHub</a></li>
                    </ul>
                </section>
            </div>
        </>
    )
}