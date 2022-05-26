import { IoPaw } from "react-icons/io5";
import marabuThumb from "../img/works1/thumbMarabu.webp";
import marabuHover from "../img/works1/thumbnailHover.webp";


export default function Works() {
    return (
        <>
            <section id="works" className="section">
                <h2 className="works__h2">Works</h2>
                <p className="works__p">Últimos trabajos</p>
                <div className="grid">
                    <article className="article">
                        <img src="#" alt="Imagen" className="article__img" loading="lazy" />
                        <h4 className="works__h4">Nombre trabajo</h4>
                    </article>
                    <article className="article">
                        <img src="#" alt="Imagen" className="article__img" loading="lazy" />
                        <h4 className="works__h4">Nombre trabajo</h4>
                    </article>
                </div>
            </section>
        </>
    )
}