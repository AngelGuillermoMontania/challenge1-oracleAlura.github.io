function qs(element) {
    return document.querySelector(element)
};

function quitarAcentos(cadena) {
    const acentos = { 'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u', 'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U' };
    return cadena.split('').map(letra => acentos[letra] || letra).join('').toString();
}

function encrypt(string) {

    const str = quitarAcentos(string)
    const strLower = str.toLowerCase()
    let newStr = ""

    for (let i = 0; i < strLower.length; i++) {
        switch (true) {
            case strLower[i] === "a":
                newStr += "ai"
                break;
            case strLower[i] === "e":
                newStr += "enter"
                break;
            case strLower[i] === "i":
                newStr += "imes"
                break;
            case strLower[i] === "o":
                newStr += "ober"
                break;
            case strLower[i] === "u":
                newStr += "ufat"
                break;
            default:
                newStr += strLower[i]
                break;
        }
    }

    return newStr
}

function decrypt(string) {

    const str = quitarAcentos(string)

    let newStr = str.toLowerCase()
    for (let i = 0; i < str.length; i++) {
        newStr = newStr.replace("ai", "a")
        newStr = newStr.replace("enter", "e")
        newStr = newStr.replace("imes", "i")
        newStr = newStr.replace("ober", "o")
        newStr = newStr.replace("ufat", "u")
    }

    return newStr
}

function copiarAlPortapapeles(element) {

    let aux = document.createElement("textarea");
    aux.innerHTML = element.innerText
    document.body.appendChild(aux);
    aux.select();
    document.execCommand("copy");
    document.body.removeChild(aux);
}

async function paste(element) {
    const text = await navigator.clipboard.readText();
    element.value = text;
}

window.addEventListener("load", () => {

    const $textToTransform = qs("#textToTransform")
    const $textResult = qs("#textResult")
    const $buttonEncript = qs(".buttonOne")
    const $buttonDecrypt = qs(".buttonTwo")
    const $buttonCopy = qs(".buttonCopy")
    const $buttonPaste = qs(".buttonPaste")
    const $doll = qs("#doll")
    const $containTextDecrypt = qs(".containTextDecrypt")

    if ($textResult.innerText === "No message was found") $buttonCopy.style.display = "none"

    $buttonEncript.addEventListener("click", () => {
        $textResult.innerText = encrypt($textToTransform.value);
        $textResult.style.color = "#000000";
        $textResult.style.width = "%100";
        console.log($textResult.style.width)
        $buttonCopy.style.display = "block";
        $doll.style.display = "none"
        $containTextDecrypt.style.justifyContent = "center"
    })

    $buttonDecrypt.addEventListener("click", () => {
        $textResult.innerText = decrypt($textToTransform.value);
        $textResult.style.color = "#000000";
        $buttonCopy.style.display = "block"
    })

    $buttonCopy.addEventListener("click", () => {
        copiarAlPortapapeles($textResult)
    })

    $buttonPaste.addEventListener("click", () => {
        paste($textToTransform)
    })

})
