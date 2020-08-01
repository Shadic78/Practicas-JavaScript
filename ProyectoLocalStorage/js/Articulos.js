import {listaArticulos} from './App.js';
import {guardarEnLocalStorage} from './Almacenamiento.js';
import {obtenerEstructuraArticulo}  from './Designs/EstructuraArticulos.js';

export const crearArticulo = (titulo, contenido) => {
    return {
        titulo,
        contenido
    };
};

export const agregarArticulo  = ( {titulo, contenido} ) => {
    const contenedor = document.getElementById('contenidoLista');
    const nuevoArticulo = document.createElement('div');

    nuevoArticulo.className = 'col-12 col-md-6 mb-4';
    nuevoArticulo.innerHTML = obtenerEstructuraArticulo(titulo, contenido);

    nuevoArticulo.addEventListener('click', clickManager);

    contenedor.appendChild(nuevoArticulo);
};

export const eliminarArticulo = (tituloArt, lista) => {
    let index = -1;
    lista.forEach((articulo, indice) => {
        if(articulo.titulo == tituloArt) {
            index = indice;
        }
    });

    if(index >= 0) {
        lista.splice(index, 1);
    }
};

export const cargarArticulos = () => {
    const listaArticulos = JSON.parse(window.localStorage.getItem('listaArticulos'));

    listaArticulos.forEach(articulo => {
        agregarArticulo(articulo);
    });
    console.log(listaArticulos);
    return listaArticulos;
};

function clickManager(e) {
    const elemento = e.target;
    if(elemento.name === 'deleteBtn') {
        const tituloArt = this.querySelector('.article-tittle').textContent;

        eliminarArticulo(tituloArt, listaArticulos);
        guardarEnLocalStorage(listaArticulos);

        this.remove();
    }
}