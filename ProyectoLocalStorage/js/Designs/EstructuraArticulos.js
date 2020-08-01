export const obtenerEstructuraArticulo = (titulo, contenido) => {
    return `
    <div class="card">
        <div class="modal-header bg-light">
            <span class="article-tittle">${titulo}</span>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <a aria-hidden="true" name="deleteBtn">&times;</a>
            </button>
        </div>
        <div class="card-body">   
            <p class="card-text article-text" contenteditable="false">
                ${contenido}                
            </p>
        </div>
    </div>
    `;
};