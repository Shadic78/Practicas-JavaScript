'use strict';

const guardarCookie = () => {
    const now = new Date();
    now.setMonth( now.getMonth() + 1 ); // Hacer que la cookie expire en un mes
    const texto = document.getElementById('texto').value;
    const cookieValue = `${texto};`
    
    document.cookie = "texto=" + cookieValue;
    document.cookie = "expires=" + now.toUTCString() + ";"
    alert(`Cookie actualizada: texto=${cookieValue}`);
 };

 const leerCookie = () => {
    const allcookies = document.cookie;
    alert("Cookie: " + allcookies );
    
    const cookiearray = allcookies.split(';');
    
    alert('Contenido del cookie:');
    for(let i = 0; i < cookiearray.length; i++) {
       let name = cookiearray[i].split('=')[0];
       let value = cookiearray[i].split('=')[1];
       alert(`Key:${name}, Value:${value}`);
    }
 };