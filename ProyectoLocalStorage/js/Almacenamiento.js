export const guardarEnLocalStorage = (lista) => {
    localStorage.setItem('listaArticulos', JSON.stringify(lista));
};

export const hayInformacionGuardada = () => {
    if(localStorage.getItem('listaArticulos')) {
        return true;
    }
    else {
        return false;
    }
};