// Array para almacenar la lista de amigos
let amigos = [];

/**
 * Agrega un nuevo amigo a la lista, realizando validaciones.
 */
function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Regex para validar que solo contenga letras y espacios
    const formatoValido = /^[a-zA-Z\s]+$/;

    // Validación de entrada: campo no vacío
    if (nombreAmigo === '') {
        alert('Por favor, escribe el nombre del amigo.');
        return;
    }

    // Validación de entrada: caracteres no válidos
    if (!formatoValido.test(nombreAmigo)) {
        alert('Por favor, ingresa un nombre válido (solo letras y espacios).');
        inputAmigo.value = '';
        return;
    }

    // Validación para evitar duplicados
    if (amigos.includes(nombreAmigo)) {
        alert('Este nombre ya ha sido agregado. Intenta con otro.');
        inputAmigo.value = '';
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombreAmigo);
    actualizarListaAmigos(); // Llama a la función para actualizar la vista

    inputAmigo.value = '';
    inputAmigo.focus();
}

/**
 * Visualización dinámica: actualiza la lista de amigos en el HTML.
 */
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpia la lista actual

    // Crea un elemento <li> por cada amigo en el array
    amigos.forEach(amigo => {
        const item = document.createElement('li');
        item.textContent = amigo;
        item.classList.add('list-item'); // Clase opcional para estilos
        listaAmigos.appendChild(item);
    });
}

/**
 * Sorteo aleatorio: selecciona un amigo al azar de la lista.
 */
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Debes agregar al menos dos amigos para poder sortear.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.textContent = `¡El amigo secreto es: ${amigoSecreto}!`; // Muestra el resultado en pantalla
}

/**
 * Reinicia el sorteo, limpiando la lista de amigos y el resultado.
 */
function reiniciar() {
    amigos = [];
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').textContent = '';
    document.getElementById('amigo').value = '';
    console.log('El juego ha sido reiniciado.');
}