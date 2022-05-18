import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Headline() {


    return (
        <>
            <section id="headline" className="headline">
                <div className="headline__div content">
                    <div className="content__photo">
                        <img src="/img/dmoji.png" alt="Dani Memoji" />
                    </div>
                    <div className="content__text text">
                        <span className="content__pretitle text--monospace">Hola!👋 me llamo </span>
                        <h1 className="content__h1">Dani Sanz</h1>
                        <span className="content__subtitle"> y soy desarrollador web junior.</span>
                    </div>
                </div>
                <div className="headline__div social">
                    <div className="social__div">
                        <a href="https://www.linkedin.com/in/danielsanzelguer/" className="social__a">
                            <BsLinkedin className="social__logo" />
                        </a>
                        <a href="https://github.com/daniDNZ" className="social__a">
                            <BsGithub className="social__logo" />
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}