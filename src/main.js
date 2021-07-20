/*
// import data from './data/lol/lol.js';

// import data from './data/rickandmorty/rickandmorty.js';

/*console.log(example, data);*/

/*
let users= data.pokemon;
function hola(users){
for(let i=0; i<users.length; i++){
    let num= (users[i]["num"]);
    console.log(num);
    let newDiv= document.createElement("div");
    newDiv.innerHTML=("hola"+ num);
   document.body.appendChild(newDiv);
}
   hola(users);*/

import { sortData } from "./data.js";
import { filterData } from "./data.js";
import data from "./data/pokemon/pokemon.js";

let datos = data["pokemon"];

function visualize(datos) {
  for (let prop in datos) {
    let numero = datos[prop]["num"];
    let nombre = datos[prop]["name"].toUpperCase();
    let link = datos[prop]["img"];
    let tipos = datos[prop]["type"].map((type) => type).join(',');
    let div = document.createElement("div");
    /*div.id = "div-poke-" + prop
        div.class = "divs-poke"*/
    div.setAttribute("class", "divs-poke");
    div.setAttribute("id", "div-poke-" + prop);
    let imgn = document.createElement("img");
    imgn.src = link;
    imgn.setAttribute("class", "img-poke");
    /*imgn.style.display="flex"*/
    let divroot = document.getElementById("root");

    divroot.appendChild(div);
    div.appendChild(imgn);
    let div2 = document.createElement("div");
    /*div2.style.display="flex"*/
    let pNum = document.createElement("p");
    pNum.innerText = numero;

    let pName = document.createElement("p");
    pName.innerText = nombre;

    let pType = document.createElement("p");
    pType.innerText = "Types: " + tipos;

    div2.appendChild(pNum);
    div2.appendChild(pName);
    div2.appendChild(pType);
    div.appendChild(div2);
    div2.setAttribute("class", "div-text");
  }
}
visualize(data["pokemon"]);

const selectElement = document.getElementById("sort");
selectElement.addEventListener("change", (event) => {
  let sortBy;
  let sortOrder;

  if (event.target.value == "az") {
    sortBy = "name";
    sortOrder = "asc";
    let valor1 = sortData(datos, sortBy, sortOrder);
    deleteall();
    visualize(valor1);
  } else if (event.target.value == "za") {
    sortBy = "name";
    sortOrder = "dsc";
    let valor2 = sortData(datos, sortBy, sortOrder);
    deleteall();
    visualize(valor2);
  } else if (event.target.value == "numa") {
    sortBy = "num";
    sortOrder = "asc";
    let valor3 = sortData(datos, sortBy, sortOrder);
    deleteall();
    visualize(valor3);
  } else if (event.target.value == "numd") {
    sortBy = "num";
    sortOrder = "dsc";
    let valor4 = sortData(datos, sortBy, sortOrder);
    deleteall();
    visualize(valor4);
  }
});



const selectElementFil = document.getElementById("type");
selectElementFil.addEventListener("change", (event) => {
  if (event.target.value == "normal") {
    let valor = filterData(datos, "normal");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "fire") {
    let valor = filterData(datos, "fire");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "water") {
    let valor = filterData(datos, "water");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "grass") {
    let valor = filterData(datos, "grass");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "flying") {
    let valor = filterData(datos, "flying");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "fighting") {
    let valor = filterData(datos, "fighting");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "poison") {
    let valor = filterData(datos, "poison");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "electric") {
    let valor = filterData(datos, "electric");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "ground") {
    let valor = filterData(datos, "ground");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "rock") {
    let valor = filterData(datos, "rock");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "psychic") {
    let valor = filterData(datos, "psychic");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "ice") {
    let valor = filterData(datos, "ice");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "bug") {
    let valor = filterData(datos, "bug");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "ghost") {
    let valor = filterData(datos, "ghost");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "steel") {
    let valor = filterData(datos, "steel");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "dragon") {
    let valor = filterData(datos, "dragon");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "dark") {
    let valor = filterData(datos, "dark");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "fairy") {
    let valor = filterData(datos, "fairy");
    deleteall();
    visualize(valor);
  }
});

function deleteall() {
  const dom = document.getElementById("root");
  while (dom.firstChild) {
    dom.removeChild(dom.firstChild);
  }
}

const searchBar = document.getElementById("search");

searchBar.addEventListener("keyup", (e) => {
  const search = e.target.value;
  console.log(search)
  const results= datos.filter((element)=>{
      return (element.name.includes(search) || element.num.includes(search))
      
  })
  deleteall();
  visualize(results);
});
