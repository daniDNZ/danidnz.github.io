export default function Bio() {
    return (
        <>
            <section id="bio" className="section bio">
                <h2 className="bio__h2">Bio</h2>
                <p className="bio__p">
                    Me encanta esto. Me refiero al <b>desarrollo web</b>, claro. A lo largo de mi vida he tonteado varias veces con la programación
                    y la maquetación web pero nunca demasiado en serio. Sin embargo, hace apenas un año tomé la decisión de cambiar de rumbo
                    e invertir en un <b>bootcamp</b> de esos tan famosos de desarrollo web fullstack. Más de 500 horas de clases y curro que
                    terminaron haciendo <i>click</i> en mi cerebro, mostrándome lo que esta profesión tenía para mí. Ahora me encuentro
                    trabajando todos los días a tiempo completo para seguir aprendiendo y mejorar todo lo rápido que puedo.
                </p>
                <p className="bio__p">
                    Por ahora, donde me siento más fuerte es en <b>front end</b>. Estoy todos los días haciendo proyectos en <b>React</b> con
                    <b> html, css, sass, y javascript</b>. Aún así, también he utilizado <b>Symphony, php y mySQL</b> y me encantaría aprender
                    más de <i>back</i>, está en mis tareas pendientes. Con esto quiero decir que estoy preparado para enfrentarme a lo que
                    me pongan delante y deseando aportar. Más adelante tienes mis últimos trabajos y un formulario para contactar conmigo ¡Un
                    saludo y gracias!
                </p>

                <ul className="social">
                    <li className="social__li">
                        <a href="#" className="social__a" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <svg className="social__svg"></svg>
                        </a>
                    </li>
                    <li className="social__li">
                        <a href="#" className="social__a" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <svg className="social__svg"></svg>
                        </a>
                    </li>
                </ul>
            </section>
        </>
    )
}