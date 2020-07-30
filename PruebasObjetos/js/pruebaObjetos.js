'use strict';

const crearObjeto = (nombre, edad, carrera) => {
    return {
        nombre,
        edad,
        carrera,
        imprimir() {
            return `${this.nombre} tiene ${this.edad} y estudia ${this.carrera}`;
        },
        imprimir2() {
            return `Nombre: ${this.nombre}\nCarrera: ${this.carrera}\nEdad: ${this.edad}`;
        }
    }
};

const imprimirObjeto = ( {nombre, edad, carrera} ) => {
    return `Objeto impreso por funcion:\nNombre: ${nombre}\nCarrera: ${carrera}\nEdad: ${edad}`;
};

const ob1 = crearObjeto('Moises', 20, 'Sistemas');
console.log(ob1.imprimir2());
console.log(imprimirObjeto(ob1));
