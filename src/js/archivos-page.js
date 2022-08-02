
import { subirImagen } from "./http-provider";

const body = document.body;
let inputFile, imgFoto;

const crearImputFileHtml = () => {

    const html = `
        <h1 class="mt-5"> subir archivos </h1>
        <hr>

        <label>Selecciona una image </label>
        <input type="file" class="form-control form-control-sm mb-2" accept="image/*" />

        <br> 
        <img id="img" class="img-thumbnail" src="">
    
    `;

    const div = document.createElement('div');
    div.innerHTML = html; 
    body.appendChild(div); 

    inputFile = document.querySelector('input');
    imgFoto = document.querySelector('#img');

}

const eventos = () => {
    inputFile.addEventListener('change', (Event)=>{
        const file = Event.target.files[0];
        subirImagen(file).then(url => 
            imgFoto.src = url);

       });
}

export const init = () => {
    crearImputFileHtml();
    eventos();
}