/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
1. HTML (imagenes)
2. imagenes HTML -> JS
3. Eventos DOM

4. Intersection Observer
5. Apicar el lazy loadin imgs

**/
import { registerImage } from './lazy.js'

const API = 'https://rickandmortyapi.com/api/character/avatar/1.jpeg';
const imageNode = document.getElementById('images');

let max = 826;
let min = 1;

const imgRandom = () => Math.floor(Math.random() * (max - min)) + min;

{/* <div class="p-4">
<img class="mx-auto" width="320" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="">
</div> */}

const createImageNode = (imgRandom) => {
    const div = document.createElement('div');
    div.className = 'mx-auto bg-gray-300 mb-4 rounded-lg';
    div.style.width = '320px';

    const img = document.createElement('img');
    img.dataset.src = `https://rickandmortyapi.com/api/character/avatar/${imgRandom}.jpeg`;
    img.className = 'mx-auto rounded-lg';
    img.width = '320';
    div.append(img);

    return div;
}




const button = document.getElementById('btn');
const addImage = (event) => {
    const newImage = createImageNode(imgRandom(826));
    imageNode.appendChild(newImage);
    registerImage(newImage);
}

button.addEventListener('click',addImage);

const btnClean = document.getElementById('btn-limpiar');

const cleanImage = (event) => {
    const container = document.querySelector('#images');
    const divImages = container.childNodes;
    [...divImages].forEach(child => {
        child.remove();
    })
}

btnClean.addEventListener('click',cleanImage);