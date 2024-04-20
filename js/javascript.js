document.querySelector('.form').addEventListener('submit', function(event) {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    if (!nombre || !email || !mensaje) {
        event.preventDefault();
        alert('Por favor, complete todos los campos.');
    }
});

// Iterar sobre cada imagen de jugador y agregar un listener de clic
playerImages.forEach(image => {
    image.addEventListener('click', function() {
        // Obtener el contenedor del artículo padre
        const playerContainer = this.closest('.character');

        // Obtener los datos del jugador del contenedor del artículo
        const nombre = playerContainer.querySelector('header h2').textContent.trim();
        const nacionalidad = playerContainer.querySelector('.info-character p:nth-of-type(1)').textContent.trim().split(':')[1];
        const posicion = playerContainer.querySelector('.info-character p:nth-of-type(2)').textContent.trim().split(':')[1];

        // Mostrar la información del jugador
        mostrarInformacion(nombre, nacionalidad, posicion);
    });
});


