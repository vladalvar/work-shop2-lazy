let totalImages = 0;
let loadedImages = 0;
//
const isIntersecting = (entry) => {
    return entry.isIntersecting;
}

const loadImage = (entry) => {
    loadedImages += 1;
    const container = entry.target;
    // console.log(container.nodeName);
    const imagen = container.firstChild;
    const url = imagen.dataset.src;

    imagen.src = url;
    container.onload = () => {
        loadedImages += 1;
        logState();
    };

    //desregistra la imagen 
    observer.unobserve(container);
}
const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage);
}) 

export const registerImage = (image) => {
    totalImages += 1;
    observer.observe(image);
    logstate();
}

function logstate() {
    console.log(`🌑 Total de imagenes: ${totalImages}`);
    console.log(`🌕 Imagenes cargadas: ${loadedImages}`);
}