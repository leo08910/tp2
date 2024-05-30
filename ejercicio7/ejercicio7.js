
const listado = $("listado");
const mostrar = $("mostrar");
const listadoTareas = $("listadoTareas");


mostrar.addEventListener("click",  async () => {
  const res =  await fetch("https://jsonplaceholder.typicode.com/users");
    if (res.ok) {
      const personas = await res.json();
      listado.innerHTML = ""
      listadoTareas.innerHTML = ""
      personas.forEach((persona, i) => {
        const item = document.createElement("li");
        item.textContent = `${persona.id} - ${persona.name} - ${persona.username} - ${persona.email} - ${persona.website}`;
        let boton = document.createElement("button")
        boton.innerText = "Ver tareas"
        boton.style.marginLeft = "10px"
        boton.addEventListener("click", () => traerTareas(i+1));
        listado.appendChild(item);
        item.appendChild(boton)
     
      });
      h1 = document.createElement("h1")
      h1.innerText = "Tareas"
      listadoTareas.appendChild(h1)

    } else {
      console.error("Error: no llegaron los datos");
    }
 });













 
function $(elemento) {
  return document.getElementById(elemento);
}

async function traerTareas(userId) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
  if (res.ok) {
      const tareas = await res.json();
      listadoTareas.innerHTML = ""
      tareas.forEach(tarea => {
          const li = document.createElement("li");
          const p = document.createElement("p");
          const p2 = document.createElement("p");

          p.style.color = tarea.completed ? "green" : "red";
          p.innerText = `Usuario: ${tarea.userId} Tarea: ${tarea.title}`;
          p2.innerText = `Tarea terminada: ${tarea.completed ? "Sí" : "No"}`;

          li.appendChild(p);
          li.appendChild(p2);
          listadoTareas.appendChild(li);
      });
  }
}

