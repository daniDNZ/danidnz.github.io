import { useEffect, useState } from "react";
import { IoPaw } from "react-icons/io5";

export default function Works() {
    return (
        <>
            <section id="works" className="section works">
                <div className="section__container">
                    <h1 className="section__h1 text--monospace">Works/</h1>
                    <div className="works__gallery gallery">
                        <div className="gallery__card card">
                            <h4 className="card__title text--monospace">App gestión veterinaria</h4>
                            <figure className="card__figure">
                                <a href="#" alt="Web clínica veterinaria">
                                    <img className="card__img card__img--thumb" src="/img/works1/thumbnail.webp" width="720" height="480" alt="Clínica veterinaria" />
                                    <img className="card__img card__img--hover" src="/img/works1/thumbnailHover.webp" width="720" height="480" alt="Clínica veterinaria" />
                                </a>
                            </figure>
                            <div className="card__view">
                                <ul className="card__list list">
                                    <li className="list__item"><IoPaw className="list__icon" /> Front page + app de gestión</li>
                                    <li className="list__item"><IoPaw className="list__icon" /> React + Bootstrap</li>
                                    <li className="list__item"><IoPaw className="list__icon" /> Symfony + MySQL</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}