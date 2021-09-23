//Selecciono por etiqueta la primera etiqueta que consiga
let esH1 = document.querySelector('h1')

console.log(esH1);

//Selecciono por clase la primera clase que consiga con ese nombre de clase
let navBar = document.querySelector('.nav-bar')
console.log(navBar)

let todosParrafos = document.querySelectorAll('p')

//recorriendo los elementos
for (const unParrafo of todosParrafos) {
    
    console.log(unParrafo);
}

//capturando un etiqueta dentro de un parrafo
let textoNegrita = document.querySelector('.parrafo-especial strong')

if(textoNegrita != null){
    console.log(textoNegrita)
}else{
    console.log('Este elemento no existe en el documento')
}

//Modificando DOM

//let titulo = document.querySelector('h1')
esH1.innerHTML += ' Agrego este contenido'

let parrafoEspecial = document.querySelector('.parrafo-especial')
//contenido html
parrafoEspecial.innerHTML = 'Un texto en <i>Cursiva<i>'

//contenido de texto plano
//parrafoEspecial.innerText = 'Un texto en <i>Cursiva<i>'

//modificando estilos de al DOM

let confirmar = confirm("¿Queres cambiar el color del titulo?")

if (confirmar){
    esH1.classList.add('titulo-destacado')
    
}