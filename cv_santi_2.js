console.log('funcionando');

const boton = document.querySelector('#boton');
const foto = document.querySelector('#foto');
const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');
const telefono = document.querySelector('#telefono');
const nacionalidad = document.querySelector('#nacionalidad');


const generarUsuario = async() => {
    console.log('generando usuario');
    const url = 'https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const {results} = await respuesta.json();
    const datos = results[0];
    console.log(datos);

    foto.src = datos.picture.large;
    nombre.textContent = datos.name.first + " " + datos.name.last;
    residencia.textContent = datos.location.city + ", " + datos.location.state + " - " + datos.location.country;
    nacionalidad.textContent = datos.nat;
    correo.textContent = datos.email;
    telefono.textContent = datos.phone;




}

boton.addEventListener('click', generarUsuario);
document.addEventListener('DOMContentLoaded', generarUsuario);

