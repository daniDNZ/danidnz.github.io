import { ReactComponent as Box } from "../img/svg/box.svg";

export default function Headline() {


    return (
        <>
            <div className="section section--headline" id="headline">
                <section className="headline__section">
                    <div className="square"></div>

                    <h2 className="headline__h2">Dani Sanz</h2>
                    <h3 className="headline__h3">Frontend<br/>Developer</h3>

                    <ul className="h-menu">
                        <li className="h-menu__li"><a href="https://www.linkedin.com/in/danielsanzelguer/" className="a h-menu__a" title="contact" target="_blank" rel="noreferrer noopener">linkedin</a></li>
                        <li className="h-menu__li"><a href="https://github.com/daniDNZ" className="a h-menu__a" title="contact" target="_blank" rel="noreferrer noopener">github</a></li>
                        <li className="h-menu__li"><a href="#works" className="a h-menu__a" title="works">works</a></li>
                        <li className="h-menu__li"><a href="#bio" className="a h-menu__a" title="bio">about</a></li>
                        <li className="h-menu__li"><a href="#contact" className="a h-menu__a" title="contact">contact</a></li>
                    </ul>

                    <Box />
                </section>
            </div>
        </>
    )
}