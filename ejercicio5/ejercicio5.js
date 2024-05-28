alturaMenor = $("alturaMenor")
alturaMayor = $("alturaMayor")
base = $("base")
formulario = $("formulario")


formulario.onsubmit = (e)=>{
    let areaRectangulo = parseFloat(alturaMenor.value * base.value)
    let areaTriangulo = parseFloat((alturaMayor.value - alturaMenor.value) * base.value / 2)
    let areaTerreno = parseFloat(areaRectangulo + areaTriangulo)
    console.log(areaTriangulo)
    console.log(areaRectangulo)
    alert(`El area del terreno es de ${areaTerreno} metros cuadrados`)
    e.preventDefault()

}






function $(elemento){
    return document.getElementById(elemento)
}