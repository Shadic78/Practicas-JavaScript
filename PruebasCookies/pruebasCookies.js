const guardarCookie = () => {
    const now = new Date();
    now.setMonth( now.getMonth() + 1 ); // Hacer que la cookie expire en un mes
    texto = document.getElementById('texto').value;
    cookieValue = `${texto};`
    
    document.cookie = "texto=" + cookieValue;
    document.cookie = "expires=" + now.toUTCString() + ";"
    alert(`Cookie actualizada: texto=${cookieValue}`);
 }

 const leerCookie = () => {
    const allcookies = document.cookie;
    alert("Cookie: " + allcookies );
    
    cookiearray = allcookies.split(';');
    
    alert('Contenido del cookie:');
    for(let i = 0; i < cookiearray.length; i++) {
       name = cookiearray[i].split('=')[0];
       value = cookiearray[i].split('=')[1];
       alert(`Key:${name}, Value:${value}`);
    }
 }      