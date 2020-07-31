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
    nuevoArticulo.innerHTML = `
        <div class="card">
        <div class="modal-header bg-light">
            <span name="tittle">${titulo}</span>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <a href="#" aria-hidden="true" name="deleteBtn">&times;</a>
            </button>
        </div>
            <div class="card-body">   
                <p class="card-text">
                    ${contenido}                
                </p>
            </div>
        </div>
    `;
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

    return lista;
};

export const cargarArticulos = () => {
    const listaArticulos = JSON.parse(window.localStorage.getItem('listaArticulos'));
    console.log('lista recuperada: ');
    console.log(listaArticulos);
    listaArticulos.forEach(articulo => {
        agregarArticulo(articulo);
    });
    return listaArticulos;
};