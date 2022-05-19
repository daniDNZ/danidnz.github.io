export default function Contact() {
    return (
        <>
            <section id="contact" className="section contact">
                <div className="section__container">
                <h1 className="section__h1 text--monospace">Contact/</h1>
                    <form method="post" action="sendbymail.php" className="contact__form form">
                        <label htmlFor="name" className="form__label">Nombre</label>
                        <input type="text" name="name" id="name" className="form__input" />
                        <label htmlFor="email" className="form__label">Email</label>
                        <input type="email" name="email" id="email" className="form__input" />
                        <label htmlFor="message" className="form__label">Mensaje</label>
                        <textarea name="message" id="message" cols="30" rows="5" className="form__input"></textarea>
                        <button type="submit" className="form__button">Enviar</button>
                    </form>
                </div>
            </section>
        </>
    )
}