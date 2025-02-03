/**Codigo para el boton tipo hamburguesa */
document.addEventListener('DOMContentLoaded', () =>{
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});

/*Codigo para hacer funcionar el form*/
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const submitButton = this.querySelector('button[type="submit"]');
    submitButton.classList.add('loanding');

    const formData = new FormData(this);

    fetch('/send_email', {
        method: 'POST', 
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        showFlashMessage('Mensaje enviado correctamente.', 'success');
        this.reset(); //Limpia el form
        submitButton.classList.remove('loading');
    })
    .catch(error => {
        showFlashMessage('Hubo un error al enviar el mensaje.', 'danger');
        console.error('Error:', error);
        submitButton.classList.remove('LOANDING');
    });
});

function showFlashMessage(message, category) {
    const flashContainer = document.getElementById('flash-message');
    const flashMessage = document.createElementElement('div');
flashMessage.className = `alert ${category}`;
flashMessage.textContent = message;

flashContainer.appendChild(flashMessage);

setTimeout(() => {
    flashMessage.remove();
}, 5000);


}