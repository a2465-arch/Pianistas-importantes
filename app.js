const compositores = {

    mozart: {
        nombre: "Wolfgang Amadeus Mozart",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Wolfgang-amadeus-mozart_1.jpg",
        descripcion: "Mozart fue un compositor austríaco del periodo clásico. Compuso más de 600 obras."
    },

    beethoven: {
        nombre: "Ludwig van Beethoven",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg",
        descripcion: "Beethoven revolucionó la música clásica y creó la famosa Novena Sinfonía."
    },

    bach: {
        nombre: "Johann Sebastian Bach",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Johann_Sebastian_Bach.jpg",
        descripcion: "Bach fue uno de los compositores más importantes del barroco."
    },

    chopin: {
        nombre: "Frédéric Chopin",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Frederic_Chopin_photo.jpeg",
        descripcion: "Chopin destacó por sus composiciones románticas para piano."
    },

    vivaldi: {
        nombre: "Antonio Vivaldi",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Vivaldi.jpg",
        descripcion: "Vivaldi fue un compositor italiano famoso por Las Cuatro Estaciones."
    },

    debussy: {
        nombre: "Claude Debussy",
        imagen: "",
        descripcion: "Debussy fue uno de los representantes más importantes del impresionismo musical, y hay varias versiones sobre su aspecto."
    },

    tchaikovsky: {
        nombre: "Piotr Ilich Tchaikovsky",
        imagen: "",
        descripcion: "Tchaikovsky compuso obras famosas como El Lago de los Cisnes, y es un pianista de los más antiguos."
    }

};

const botonBuscar = document.getElementById("btnBuscar");

botonBuscar.addEventListener("click", buscarCompositor);

function buscarCompositor() {

    const input = document
        .getElementById("inputBusqueda")
        .value
        .toLowerCase();

    mostrarCompositor(input);

}

function seleccionarCompositor(nombre) {

    document.getElementById("inputBusqueda").value = nombre;

    mostrarCompositor(nombre);

}

function mostrarCompositor(nombre) {

    const resultado = document.getElementById("resultado");

    if (compositores[nombre]) {

        resultado.innerHTML = `

        <div class="card">

            <h2>${compositores[nombre].nombre}</h2>

            <img 
                src="${compositores[nombre].imagen}" 
                alt="${compositores[nombre].nombre}"
            >

            <p>${compositores[nombre].descripcion}</p>

        </div>

        `;

    } else {

        resultado.innerHTML = `

        <div class="card">

            <h2>Compositor no encontrado</h2>

            <p>
                Intenta seleccionar uno de la lista.
            </p>

        </div>

        `;

    }

}

const botonModo = document.getElementById("btnModo");

botonModo.addEventListener("click", cambiarModo);

function cambiarModo() {

    document.body.classList.toggle("light");

}