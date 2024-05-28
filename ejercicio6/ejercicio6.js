const formulario = $("formulario");
const mensaje = $("mensaje");
const edad = $("edad");

formulario.addEventListener("submit", (e) => {
    mensaje.style.color = "red";
    if (formulario["nombre"].value === "") {
      mensaje.textContent = "Nombre vacio";
    } else if (formulario["apellido"].value === "") {
      mensaje.textContent = "Apellido vacio";
    } else if (formulario["edad"].value < 0) {
      mensaje.textContent = "La edad es negativa";
    } else if (formulario["edad"].value == "") {
      mensaje.textContent = "La edad esta vacia";
    } else if (formulario["edad"].value < 18) {
      mensaje.textContent = "Menor de edad";
    } else if (formulario["altura"].value < 0) {
      mensaje.textContent = "La altura no puede ser negativa";
    } else if (formulario["altura"].value === "" || formulario["altura"].value === "0") {
      mensaje.textContent = "Altura vacia";
    } else if (formulario["altura"].value > 230) {
      mensaje.textContent = "La altura no puede ser superior a 230cm";   
    } else if (formulario["correo"].value === "") {
      mensaje.textContent = "El correo esta vacio";         
    } else if (!formulario["correo"].value.includes("@")) {
      mensaje.textContent = "El correo debe incluir @";     
    } else {
      mensaje.textContent = "Todos los datos son correctos";
      mensaje.style.color = "green";
    }
    e.preventDefault();
    });


    function $(elemento) {
      return document.getElementById(elemento);
    }