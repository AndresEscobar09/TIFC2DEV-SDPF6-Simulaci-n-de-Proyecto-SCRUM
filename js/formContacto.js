const btnform = document.getElementById('btn-form');
const form = document.getElementById('form-contact');


btnform.addEventListener('click', (e) => {
    e.preventDefault();

    const messageForm = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    localStorage.setItem('message-contact', JSON.stringify(messageForm));

    alert('Se guardo el mensaje correctamente');
    form.reset()

});