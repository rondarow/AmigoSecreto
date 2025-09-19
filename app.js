// Inicializa un array vacio para almacenar los nombres de los amigos
let amigos = [];

/**
 * Funcion para agregar un nuevo amigo a la lista
 */
function agregarAmigo() {
  // Obtiene el valor del input y elimina espacios en blanco al inicio y al final
  let nombreAmigo = document.getElementById('amigo').value.trim();
  
  // Verifica si el campo esta vacio y muestra una alerta si es asi
  if (nombreAmigo == '') {
    alert('Por favor, inserte un nombre.');
    return; // Sale de la funcion si no se ingreso ningun nombre
  }
  
  // Agrega el nombre al array de amigos
  amigos.push(nombreAmigo);

  // Limpia el campo de entrada
  document.getElementById('amigo').value = '';

  // Actualiza visualmente la lista de amigos en la pagina
  actualizarListaAmigos();
}

/**
 * Funcion para mostrar la lista actualizada de amigos en el DOM
 */
function actualizarListaAmigos() {
  // Obtiene el elemento HTML donde se mostrara la lista
  let listaAmigos = document.getElementById('listaAmigos');

  // Limpia el contenido anterior de la lista
  listaAmigos.innerHTML = '';
  
  // Recorre el array de amigos y crea un elemento <li> por cada uno
  amigos.forEach((amigo) => {
    let nuevoAmigo = document.createElement('li');
    nuevoAmigo.textContent = amigo;
    listaAmigos.appendChild(nuevoAmigo); // Agrega el <li> a la lista
  });
}

/**
 * Funcion para sortear aleatoriamente un amigo del array
 */
function sortearAmigo() {
  // Verifica si hay amigos en la lista antes de sortear
  if (amigos.length === 0) {
    alert('No hay amigos para sortear.');
    return; // Sale de la funcion si la lista esta vacia
  }
  
  // Selecciona un amigo aleatoriamente usando Math.random y Math.floor
  let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

  // Muestra el resultado del sorteo en el DOM
  document.getElementById('resultado').innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;
}