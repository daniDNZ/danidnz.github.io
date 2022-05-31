import { RiExternalLinkLine } from 'react-icons/ri';


export default function Works() {

    return (
        <>
            <section id="works" className="section section--works">
                
                <h2 className="h2 works__h2">Last works</h2>
                <article className="article">
                    {/* <img src={w3} alt="Imagen" className="img article__img" loading="lazy" /> */}
                    <h3 className="h3 article__h3">CODE CHALLENGES</h3>
                    <ul className="article__ul">
                        <li className="article__li">JavaScript</li>
                        <li className="article__li">REACT</li>
                        <li className="article__li">HTML5</li>
                        <li className="article__li">SCSS</li>
                    </ul>
                    <ul className="article__ul-social">
                        <li className="article__li-social"><a href="https://danidnz.github.io/code-challenges/" className="a article__link" title="Demo Marabú" target="_blank" rel="noreferrer noopener">Demo <RiExternalLinkLine /></a></li>
                        <li className="article__li-social"><a href="https://github.com/daniDNZ/code-challenges" className="a article__link" title="Repositorio" target="_blank" rel="noreferrer noopener">GitHub <RiExternalLinkLine /></a></li>
                    </ul>
                </article>
                <article className="article">
                    {/* <img src={w2} alt="Imagen" className="img article__img" loading="lazy" /> */}
                    <h3 className="h3 article__h3">PORTFOLIO</h3>
                    <ul className="article__ul">
                        <li className="article__li">REACT</li>
                        <li className="article__li">HTML5</li>
                        <li className="article__li">SCSS</li>
                        <li className="article__li">JS</li>
                    </ul>
                    <ul className="article__ul-social">
                        <li className="article__li-social"><a href="https://github.com/daniDNZ/danidnz.github.io" className="a article__link" title="Repositorio" target="_blank" rel="noreferrer noopener">GitHub <RiExternalLinkLine /></a></li>
                    </ul>
                </article>
                <article className="article">
                    {/* <img src={marabu} alt="Imagen" className="img article__img" loading="lazy" /> */}
                    <h3 className="h3 article__h3">MARABÚ</h3>
                    <ul className="article__ul">
                        <li className="article__li">REACT</li>
                        <li className="article__li">SYMFONY</li>
                        <li className="article__li">MYSQL</li>
                        <li className="article__li">BOOTSTRAP</li>
                    </ul>
                    <ul className="article__ul-social">
                        <li className="article__li-social"><a href="https://danidnz.github.io/Marabu/" className="a article__link" title="Demo Marabú" target="_blank" rel="noreferrer noopener">Demo <RiExternalLinkLine /></a></li>
                        <li className="article__li-social"><a href="https://github.com/daniDNZ/Marabu" className="a article__link" title="Repositorio" target="_blank" rel="noreferrer noopener">GitHub <RiExternalLinkLine /></a></li>
                    </ul>
                </article>
            </section>
        </>
    )
}