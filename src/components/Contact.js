export default function Contact() {

    const handleData = (d, form) => {
        form.reset();
    }

    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const fData = new FormData(form);

        const config = {
            method: form.method,
            body: fData
        }

        const request = new Request("https://www.danisanzdev.com/sendbymail.php", config);
    
        fetch(request)
            .then(response => response.json())
            .then(data => { handleData(data, form)} )
            .catch(e => console.log(e));
    }

    return (
        <>
            <section id="contact" className="section contact">
                <div className="section__container">
                <h1 className="section__h1 contact__h1 text--monospace">Contact/</h1>
                <p className="section__subtitle text--monospace">Déjame un mensaje 💬</p>
                    <form method="post" className="contact__form form" onSubmit={handleForm}>
                        <fieldset className="form__fieldset">
                            <input type="text" name="name" id="name" placeholder="_name" className="form__input" required/>
                            <input type="email" name="email" id="email" className="form__input" placeholder="_email" required/>
                        </fieldset>
                        <textarea name="message" id="message" cols="30" rows="5" className="form__input form__input--textarea" placeholder="_message" required></textarea>
                        <input type="submit" className="form__button" value="send" data-content="visit"></input>
                    </form>
                </div>
            </section>
        </>
    )
}