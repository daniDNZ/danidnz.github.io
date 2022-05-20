import { useEffect, useState } from "react";

export default function Works() {
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        const thumbTransition = (e) => {
            const thumb = e.currentTarget.children[0];
            const figcaption = e.currentTarget.children[1];
            
            if (clicked) {
    
                thumb.style.transform = "scale(1)"; 
                figcaption.style.backgroundColor = "transparent";
                figcaption.style.color = "transparent";
                setClicked(false);
    
            } else {
    
                thumb.style.transform = "scale(1.1)"; 
                figcaption.style.backgroundColor = "#282b38";
                figcaption.style.color = "#fbeef3";
                setClicked(true);
            }
        }

        const figcaptionsHTMLCol = document.querySelectorAll('.card');
        figcaptionsHTMLCol.forEach(element => {
            element.addEventListener('touchstart', thumbTransition); 
        });
    })

    

    return (
        <>
            <section id="works" className="section works">
                <div className="section__container works__container">

                    <h1 className="section__h1 text--monospace">Works/</h1>
                    <div className="works__gallery gallery">
                        <figure className="gallery__card card">
                            <img className="card__thumb" src="/img/works1/thumbnail.jpg" alt="Clínica veterinaria" />
                            <img className="card__hover" src="/img/works1/thumbnailHover.jpg" alt="Clínica veterinaria" />
                        </figure>
                    </div>
                </div>
            </section>
        </>
    )
}