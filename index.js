function qs(element) {
    return document.querySelector(element)
};

function quitarAcentos(cadena){
    const acentos = {'á':'a','é':'e','í':'i','ó':'o','ú':'u','Á':'A','É':'E','Í':'I','Ó':'O','Ú':'U'};
    return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();	
}

function encrypt (string) {
    
}

window.addEventListener("load", () => {

    const $buttonEncript = document.querySelector(".buttonOne")
    const $buttonDecript = document.querySelector(".buttonTwo")
    /* const $buttonCopy = document.querySelector(".buttonCopy") */
    
    $buttonEncript.addEventListener("click", () => {
        console.log("CLICKASO")
    })

})
