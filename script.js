document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu__btn');
    const dropdown = document.querySelector('.dropdown');

    menuBtn.addEventListener('click', function() {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    const registroForm = document.getElementById('registroForm');
    registroForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        alert(`¡Muchas Gracias por registrarte ${nombre}, Shalom!`);
        registroForm.reset();
    });
});