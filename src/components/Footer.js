import { BsLinkedin, BsGithub } from "react-icons/bs";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer__section footer__section--thanks">
                    <p className="footer__text">
                        Gracias por llegar hasta aquí <br /> ¡Espero tu feedback!
                    </p>
                </div>
                <div className="footer__section footer__section--social">
                    <a href="https://www.linkedin.com/in/danielsanzelguer/" className="footer__sm">
                        <BsLinkedin className="social__logo" />
                    </a>
                    <a href="https://github.com/daniDNZ" className="footer__sm">
                        <BsGithub className="social__logo" />
                    </a>
                </div>
            </footer>
        </>
    )
}