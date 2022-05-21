import { useEffect, useState } from "react";

export default function Works() {
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const thumbTransition = (e) => {
            const thumb = e.currentTarget.children[0];
            const thumbHover = e.currentTarget.children[1];
            
            if (clicked) {
    
                thumb.style.transform = "scale(1)"; 
                thumbHover.style.opacity = "0";
                setClicked(false);
                
            } else {
                
                thumb.style.transform = "scale(1.1)"; 
                thumbHover.style.opacity = "1";
                setClicked(true);
            }
        }

        const figcaptionsHTMLCol = document.querySelectorAll('.card');
        figcaptionsHTMLCol.forEach(element => {
            element.addEventListener('touchstart', thumbTransition, {passive: true}); 
        });
    })

    

    return (
        <>
            <section id="works" className="section works">
                <div className="section__container works__container">

                    <h1 className="section__h1 text--monospace">Works/</h1>
                    <div className="works__gallery gallery">
                        <figure className="gallery__card card">
                            <img className="card__img card__img--thumb" src="/img/works1/thumbnail.webp" width="720" height="480" alt="Clínica veterinaria" />
                            <img className="card__img card__img--hover" src="/img/works1/thumbnailHover.webp" width="720" height="480" alt="Clínica veterinaria" />
                        </figure>
                    </div>
                </div>
            </section>
        </>
    )
}