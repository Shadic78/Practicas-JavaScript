'use strict';
import {crearArticulo, agregarArticulo, eliminarArticulo, cargarArticulos} from './Articulos.js';
import {guardarEnLocalStorage, hayInformacionGuardada} from './Almacenamiento.js';

export let listaArticulos = [];

window.onload = () => {
    if(hayInformacionGuardada()) {
        listaArticulos = cargarArticulos();
    }
    else {
        console.log('No hay archivos en localStorage');
    }
};

document.getElementById('formulario').addEventListener('submit', (e) => {
    const titulo = document.getElementById('txtTitulo').value.trim();
    const contenido = document.getElementById('txtContenido').value;
    const articulo = crearArticulo(titulo, contenido);

    agregarArticulo(articulo);
    listaArticulos.push(articulo);

    guardarEnLocalStorage(listaArticulos);

    document.getElementById('formulario').reset();
    e.preventDefault();
});