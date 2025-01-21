//input
let text = document.getElementById("text"); 

//buttons
let buttonActionConvertHexadecimal = document.getElementById("button"); 
let buttonAcctionConvertBinary = document.getElementById("button2"); 
let buttonAcctionConvertOcta = document.getElementById("button3"); 



let convertionToHexadecimal = document.getElementById("convertion"); 
let convertionToBinariyHTML = document.getElementById("binary"); 
let convertionToOctadecimal = document.getElementById("octa"); 



//functions; 
function converToHex(text) {
    return text.split('')
    .map(char => char.charCodeAt(0).toString(16))
    .join(' ');
}

function convertToBinay(text) {
    return text.split('')
    .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join(' ');
}



buttonActionConvertHexadecimal.addEventListener("click", () => {
    const newText = text.value; 
    convertionToHexadecimal.innerHTML = `Hexadecimal: ${converToHex(newText)}`;      
})


buttonAcctionConvertBinary.addEventListener("click", () => {
    const newTextBinary = text.value; 
    convertionToBinariyHTML.innerHTML = `Binary: ${convertToBinay(newTextBinary)}`
})

