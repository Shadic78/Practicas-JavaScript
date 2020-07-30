'use strict';

const guardar = () => {
    // Probando guardar un objeto en localStorage
    const texto = document.getElementById('texto').value;
    const obj = {
        textoIngresado: texto,
        numero: 12
    }
    localStorage.setItem('cadena', texto);
    localStorage.setItem('objeto', JSON.stringify(obj));
};

const leer = () => {
    // Probando recuperar un objeto de localStorage
    const texto = localStorage.getItem('cadena');
    const objeto = JSON.parse(localStorage.getItem('objeto'));
    console.log('Objeto recuperado: ');
    console.log(objeto);
    console.log('LocalStorage: ');
    console.log(localStorage);
};