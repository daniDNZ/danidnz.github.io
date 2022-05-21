export default function Contact() {
    
    const hideAlert = () => {
        const alert = document.querySelector('.alert');
        alert.classList.remove('alert--active');
        alert.classList.remove('alert--fail');
        alert.classList.remove('alert--success');
    }

    const showAlert = () => {
        const alert = document.querySelector('.alert');
        alert.classList.add('alert--active');
        setTimeout(hideAlert, 5000);
    }

    const handleData = (d, form) => {
        const alert = document.querySelector('.alert');
        const alertText = document.querySelector('.alert__text');

        if (d.sent) {

            alert.classList.add('alert--success');
            alertText.textContent = 'Mensaje enviado';
            form.reset();
            showAlert();

        } else {

            alert.classList.add('alert--fail');
            alertText.textContent = 'Algo ha ido mal...';
            showAlert();
        }
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
                    <p className="section__subtitle text--monospace">hey! déjame un mensaje 💬</p>
                    <form method="post" className="contact__form form" onSubmit={handleForm} >
                        <fieldset className="form__fieldset">
                            <input type="text" name="name" id="name" placeholder="_name" className="form__input" required />
                            <input type="email" name="email" id="email" className="form__input" placeholder="_email" required />
                        </fieldset>
                        <textarea name="message" id="message" cols="30" rows="5" className="form__input form__input--textarea" placeholder="_message" required></textarea>
                        <input type="submit" className="form__button" value="send" data-content="visit"></input>
                        <div className="contact__alert alert">
                            <span className="alert__text">Mensaje enviado</span>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}