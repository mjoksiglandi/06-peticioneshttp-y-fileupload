
import { obtenerChiste } from "./http-provider";




const body = document.body;
let btnOtro, olList;


const crearChistesHtml = () => {
    const html =`
    <h1 class="mt-5">chistes</h1>
    <hr>

    <button class="btn btn-primary">otro chiste</button>
    <ol class="mt-2 list-group">
    </ol>`;

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html; 
    body.append(divChistes);

}

const eventos = () => {
    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    btnOtro.addEventListener('click', async() => {
        btnOtro.disabled = true;
        dibujarChistes(await obtenerChiste())
        btnOtro.disabled = false;

        });
}
   
const dibujarChistes = (response) => {
    const olItem = document.createElement('ol'); 
    olItem.innerHTML = `<b>${response.id} </b> ${response.value}`;
    olList.classList.add('list-group-item');
    olList.append(olItem);

}



export const init = () => {
    crearChistesHtml(); 
    eventos();
}
