estatura = $("estatura")
peso = $("peso")
calcular = $("calcular")
formulario = $("formulario")

formulario.onsubmit = (e)=>{
    if (isNaN(peso.value) || isNaN(estatura.value)) {
        alert("Tienen que ser numeros")
    }
    else if (peso.value === "" || estatura.value === "") {
        alert("Campos vacios")
    }
    else{
        let resultado = parseFloat(peso.value / estatura.value ** 2)
        alert(`El IMC es de: ${resultado}`)
    }


    e.preventDefault()
}









function $(elemento){
    return document.getElementById(elemento)
}