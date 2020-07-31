'use strict';

let listaArticulos = [];

const crearArticulo = (titulo, contenido) => {
    return {
        titulo,
        contenido
    };
};

const agregarArticulo  = ( {titulo, contenido} ) => {
    const contenedor = document.getElementById('contenidoLista');
    const nuevoArticulo = document.createElement('div');
    nuevoArticulo.className = 'col-12 col-md-6 mb-4';
    nuevoArticulo.innerHTML = `
        <div class="card">
            <div class="card-body">
                <strong>Titulo: </strong>${titulo}<br />
                <strong>Contenido:</strong>${contenido}
            </div>
        </div>
    `;
    contenedor.appendChild(nuevoArticulo);
};

const cargarArticulos = () => {
    listaArticulos = JSON.parse(window.localStorage.getItem('listaArticulos'));
    console.log('lista recuperada: ');
    console.log(listaArticulos);
    listaArticulos.forEach(articulo => {
        agregarArticulo(articulo);
    });
};

const guardarEnLocalStorage = (lista) => {
    localStorage.setItem('listaArticulos', JSON.stringify(lista));
};

const hayInformacionGuardada = () => {
    if(localStorage.getItem('listaArticulos')) {
        return true;
    }
    else {
        return false;
    }
};

window.onload = () => {
    console.log(hayInformacionGuardada());
    if(hayInformacionGuardada()) {
        cargarArticulos();
    }
    else {
        console.log('No hay archivos en localStorage');
    }
};

document.getElementById('formulario').addEventListener('submit', (e) => {
    const titulo = document.getElementById('txtTitulo').value;
    const contenido = document.getElementById('txtContenido').value;
    const articulo = crearArticulo(titulo, contenido);

    agregarArticulo(articulo);
    listaArticulos.push(articulo);

    guardarEnLocalStorage(listaArticulos);

    e.preventDefault();
});