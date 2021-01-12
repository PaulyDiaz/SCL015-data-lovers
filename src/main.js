/*import { example } from './data.js';
Aqui va la data que vamos importar */
//import data from './data/lol/lol.js';
/*Despues las funciones se deben importar aca 
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);*/


/*import { ordenar } from './data.js';*/
import data from './data/lol/lol.js';

let datalol= data.data
console.log(datalol);
let dataArrayLol = Object.values(datalol);
console.log(dataArrayLol);
/*queremos mostrar imagen y datos de los campeones en HTML
Crear html dinamico
Traer datos desde el objeto
Recorrer el array , para traer los datos, posiciones
*/ 
const botonTodos = document.getElementById("botonCampeones");
botonTodos.addEventListener("click", mostrarCampeones);

function mostrarCampeones() {
  document.getElementById("inicio").style.display="none";
  document.getElementById("contenedorCampeones").style.display="column";
  let campeones = document.getElementById("containerChampions");
  for (let i=0 ; i<dataArrayLol.length; i++) {
    /*console.log(dataArrayLol[i].id);*/
    campeones.innerHTML += `<div class="container-box">
    <div class="box">
    <h2 class="nameBox"> ${dataArrayLol[i].name}</h2>
    <img class="icons" src=" ${dataArrayLol[i].img}">
    <h4 class="roles">${dataArrayLol[i].tags}</h4>
    <p class="propaganda"> ${dataArrayLol[i].blurb} </p>
    </div>
    </div>`;
    console.log(dataArrayLol[i].img);
  }
}




/*function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.boton_desplegable')) {
    var lista_campeones = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < lista_campeones.length; i++) {
      var openlista_campeones = lista_campeones[i];
      if (openlista_campeones.classList.contains('show')) {
        openlista_campeones.classList.remove('show');
      }
    }
  }
}*/

  