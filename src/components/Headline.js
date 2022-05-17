import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Headline() {


    return (
        <>
            <section id="headline">
                <div className="headline-wrapper">
                    <div className="flex-end">
                        <img src="/img/dmoji.png" width="250em" height="250em" alt="Dani Memoji" />
                    </div>
                    <div className="headline-text">
                        <div>
                            <span className="monospace monospace-headline">Hola!👋 me llamo </span>
                            <h1 className="m-0">Dani Sanz</h1>
                            <span className=""> y soy desarrollador web junior.</span>
                        </div>
                    </div>
                </div>
                    <div className="social-row">
                        <div>
                            <a href="https://www.linkedin.com/in/danielsanzelguer/" className="">
                                <BsLinkedin className="" style={{ fontSize: '2em' }} />
                            </a>
                            <a href="https://github.com/daniDNZ" className="">
                                <BsGithub className="" style={{ fontSize: '2em' }} />
                            </a>
                        </div>
                        
                    </div>
            </section>
        </>
    )
}