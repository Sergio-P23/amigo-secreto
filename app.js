let amigos = [];
let inputAmigos = document.getElementById('amigo');
let listaAmigos = document.getElementById('listaAmigos');
let amigoSorteado = document.getElementById('resultado');



function agregarAmigo() {
    let amigo = inputAmigos.value.trim();
    if (amigo === '') {
        Swal.fire({
            title: "No haz ingresado un nombre",
            text: "ingresa un nombre para agregar a la lista",
            icon: "warning",
            confirmButtonText: "Entendido",
            
        });
    } else {
        amigos.push(amigo);
        inputAmigos.value = '';  // limpiar el input
        mostrarAmigos();         // actualizar la lista
    }
}

function mostrarAmigos() {
    listaAmigos.innerHTML = ''; // limpiar antes de mostrar
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        Swal.fire({
        title: `lista de amigos no iniciada`,
        icon: "error",
        draggable: true
    });
    } else {
        let indice = Math.floor(Math.random() * amigos.length);
    listaAmigos.innerHTML = ''; // limpiar antes de mostrar
    Swal.fire({
        title: `Tu amigo secreto es: ${amigos[indice]}`,
        icon: "success",
        draggable: true
    });
    amigos = [];
    }
}