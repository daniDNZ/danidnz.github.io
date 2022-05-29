// import { useEffect } from "react";
import w2 from "../img/works2/w2-thumb.webp";
import w3 from "../img/works3/w3-thumb.webp";
import marabu from "../img/works1/marabup.webp";
import { RiExternalLinkLine } from 'react-icons/ri';


export default function Works() {

    // useEffect(() => {

    //     /**
    //     * Solution by Alvaro Trigo 
    //     * Thank you!
    //     * https://alvarotrigo.com/
    //     */
    //     init();

    //     function init() {
    //         setStickyContainersSize();
    //         bindEvents();
    //     }

    //     function bindEvents() {
    //         trackScroll();
    //     }

    //     function setStickyContainersSize() {
    //         document.querySelectorAll('.sticky-container').forEach(function (container) {
    //             const stikyContainerHeight = (container.querySelector('.sticky-container__div').offsetWidth + window.innerHeight);
    //             container.setAttribute('style', 'height: ' + stikyContainerHeight + 'px');
    //         });
    //     }

    //     function isElementInViewport(el) {
    //         const rect = el.getBoundingClientRect();
    //         return rect.top <= 0 && rect.bottom >= document.documentElement.clientHeight;
    //     }

    //     function trackScroll() {
    //         const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function (container) {
    //             const isVisible = isElementInViewport(container);
    //             if (!isVisible) {
    //                 let containerWidth = container.offsetTop + container.offsetWidth;
    //                 console.log(container.offsetTop)
    //                 if (containerWidth < window.pageYOffset) {
    //                     container.querySelector('.sticky-container__div').scrollLeft = containerWidth;
    //                 } else if (container.offsetTop < window.pageYOffset) {

    //                     container.querySelector('.sticky-container__div').scrollLeft = 0;
    //                 }
    //             }
    //             return isVisible;
    //         })[0];

    //         if (!containerInViewPort) {
    //             requestAnimationFrame(trackScroll);
    //             return;
    //         }

    //         let isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
    //         let isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
    //         let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

    //         if (g_canScrollHorizontally) {
    //             let pxToScroll = window.pageYOffset - containerInViewPort.offsetTop;
    //             containerInViewPort.querySelector('.sticky-container__div').scrollLeft = pxToScroll;
    //         }

    //         requestAnimationFrame(trackScroll);
    //     }



    // })
    return (
        <>
            <section id="works" className="section section--works">
                <h2 className="h2 works__h2">Last works</h2>
            </section>
            <div className="sticky-container">
                <div className="sticky-container__div">
                    <article className="article">
                        <img src={w3} alt="Imagen" className="img article__img" loading="lazy" />
                        <h4 className="article__h4">CODE CHALLENGES</h4>
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
                        <img src={w2} alt="Imagen" className="img article__img" loading="lazy" />
                        <h4 className="article__h4">PORTFOLIO</h4>
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
                        <img src={marabu} alt="Imagen" className="img article__img" loading="lazy" />
                        <h4 className="article__h4">MARABÚ</h4>
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


                </div>
            </div>
        </>
    )
}