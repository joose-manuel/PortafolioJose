//Primero capturamos el elemento del DOM con el id que definimos en el html
const text = document.getElementById("animate-text");
let str = text.innerHTML;
text.innerHTML = "";

//Declaramos una varible en la que asignaremos un valor para que sea el tiempo en ms que durará la función setTimeout
const speed = 100;
let i = 22;

//Esta función recorre todos los caracteres nuestro texto
const typeWriter = () => {
  if (i < str.length) {
    text.innerHTML += str.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};

//Acá ejecutamos la función
setTimeout(typeWriter, speed);



behavior: 'smooth'
block: 'start'