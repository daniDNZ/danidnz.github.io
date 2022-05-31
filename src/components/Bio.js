import dani from "../img/dPic.webp";
import { GrLinkedin } from 'react-icons/gr';
import { GrGithub } from 'react-icons/gr';

export default function Bio() {
    return (
        <>
            <section id="bio" className="section bio">
                <h2 className="h2 bio__h2">About</h2>
                <p className="bio__p">
                    <img src={dani} className="img bio__pic" alt="Dani Sanz" loading="lazy" height="188px" width="135px"/>
                    Hola! Me llamo Dani Sanz y soy <b>desarrollador web frontend.</b> Últimamente dedico casi todo mi tiempo a esto pero también
                    tengo otros hobbies como la fotografía, el senderismo, los videojuegos o la música.
                    <br />
                    <br/>
                    Estoy todos los días haciendo proyectos en <b>ReactJS</b> con
                    <b> HTML, CSS, SCSS, y JavaScript</b>. Aún así, también he utilizado <b>Symphony, PHP y MySQL.</b> Me encantaría aprender
                    más <i>back</i>, está en mis tareas pendientes. Con esto quiero decir que estoy preparado para enfrentarme a lo que
                    me pongan delante y deseando aportar. No te olvides de visitar mis <a className="a" href="#works"><b><i>últimos trabajos </i></b></a>
                     y de mandarme un mensaje con el formulario que tienes más abajo ¡Un saludo y que tengas un buen día!
                </p>

                <ul className="social">
                    <li className="social__li">
                        <a href="https://www.linkedin.com/in/danielsanzelguer/" className="social__a" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <div className="social__logo"><GrLinkedin size={40}/></div>
                        </a>
                    </li>
                    <li className="social__li">
                        <a href="https://github.com/daniDNZ" className="social__a" title="GitHub" target="_blank" rel="noopener noreferrer">
                            <div className="social__logo"><GrGithub size={40}/></div>
                        </a>
                    </li>
                </ul>
            </section>
        </>
    )
}