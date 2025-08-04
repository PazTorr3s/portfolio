const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

emailjs.init('yMjwuXDp-T1wo2QRk');

const sendEmail= (e) => {
    e.preventDefault()

    emailjs.sendForm('service_34zx9m7','template_peivdz4', contactForm)
    .then(() => {
        contactMessage.textContent = 'Mensaje enviado correctamente'

        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    })
        .catch((error) => {
            contactMessage.textContent = 'Error al enviar el mensaje';
            console.error('EmailJS error:', error);
        });
}

contactForm.addEventListener('submit', sendEmail);