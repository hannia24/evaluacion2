const ListaTareas ={

    tareas: [],

    agregarTarea: function(tarea){
        this.tareas.push(tarea);
    },

    mostrarlista: function() {
    const listaTareasElement  = document.getElementById("lista");
    listaTareasElement.innerHTML ="";

    this.tareas.forEach(function(tarea){
        const tareaElement = document.createElement ("li");
        tareaElement.textContent = tarea;
        listaTareasElement.appendChild(tareaElement);
    });
   
    }
    
};

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){
event.preventDefault();

const tareaInput = document.getElementById("tarea");
const nuevaTarea = tareaInput.value;

ListaTareas.agregarTarea (nuevaTarea);
ListaTareas.mostrarlista();

tareaInput.value="";
});

let arrayCalculadora = ["SUMA","RESTA","MULTIPLICACION","DIVISION"];

const array = [tareaInput];
let sum = 0;

for(let i = 0; i < array.length ; i++ ){
    sum +=array[i];
}
console.log(sum);


