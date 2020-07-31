'use strict';
import {crearArticulo, agregarArticulo, eliminarArticulo, cargarArticulos} from './Articulos.js';
import {guardarEnLocalStorage, hayInformacionGuardada} from './Almacenamiento.js';

let listaArticulos = [];

window.onload = () => {
    console.log(hayInformacionGuardada());
    if(hayInformacionGuardada()) {
        listaArticulos = cargarArticulos();
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

document.getElementById('contenidoLista').addEventListener('click', (e) => {
    const elemento = e.target;

    if(elemento.name === 'deleteBtn') {
        const tituloArt = elemento.parentElement.parentElement.firstElementChild.innerText;
        console.log(tituloArt);
        listaArticulos = eliminarArticulo(tituloArt, listaArticulos);
        console.log('titulo: ', tituloArt);
        console.log(listaArticulos);

        guardarEnLocalStorage(listaArticulos);

        // Eliminar la carta del documento
        elemento.parentElement.parentElement.parentElement.parentElement.remove();
    }
});