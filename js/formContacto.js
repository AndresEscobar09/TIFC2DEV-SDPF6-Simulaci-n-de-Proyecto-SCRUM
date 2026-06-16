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

const container = document.getElementById('message-container');

const data = localStorage.getItem('message-contact');

if (data) {
    const message = JSON.parse(data);

    container.innerHTML = `
        <div class="card p-3 shadow-sm">
            <h5>${message.name}</h5>
            <p><strong>Email:</strong> ${message.email}</p>
            <p><strong>Asunto:</strong> ${message.subject}</p>
            <p><strong>Mensaje:</strong> ${message.message}</p>
        </div>
    `;
}  