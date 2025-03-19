// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//arreglo para amigos
let amigos = [];
//funcion para agregar a los amigos
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre); // Agregamos al array
    input.value = ""; // Limpiamos
    mostrarLista(); // Actualiza la lista
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let indice = Math.floor(Math.random() * amigos.length);//con math.floor y random
    let amigoSorteado = amigos[indice];

    document.getElementById("resultado").innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiamos la lista antes de que se actualice
    amigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}