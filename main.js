/*console.log(example, data);*/
import { computeStats } from "./data.js";
import { sortData } from "./data.js";
import { filterData } from "./data.js";
import data from "./data/pokemon/pokemon.js";

let datos = data["pokemon"];

//Visualizar los Divs en pantalla

function visualize(datos) {
  for (let prop in datos) {
    let numero = datos[prop]["num"];
    let nombre = datos[prop]["name"].toUpperCase();
    let link = datos[prop]["img"];
    let tipos = datos[prop]["type"].map((type) => type);
    let region = datos[prop]["generation"]["name"];
    let weak = datos[prop]["weaknesses"].join(" , ");
    let resistant = datos[prop]["resistant"].join(" , ");
    let div = document.createElement("div");
    div.setAttribute("class", "divs-poke");
    div.setAttribute("id", "div-poke-" + prop);
    let imgn = document.createElement("img");
    imgn.src = link;
    imgn.setAttribute("class", "img-poke");
    let divroot = document.getElementById("root");
    divroot.appendChild(div);
    div.appendChild(imgn);

    let div2 = document.createElement("div");
    div2.setAttribute("class", "div-text");

    let pNum = document.createElement("p");
    pNum.innerText = numero;
    pNum.setAttribute("class", "number-text");

    let pReg = document.createElement("p");
    pReg.innerText = region;
    pReg.setAttribute("class", "region-text");

    let pName = document.createElement("p");
    pName.innerText = nombre;

    div2.appendChild(pNum);
    div2.appendChild(pReg);
    div2.appendChild(pName);
    div.appendChild(div2);

    let divTipo = document.createElement("div");
    divTipo.setAttribute("class", "div-tipo");
    div2.appendChild(divTipo);

    let divTipo0 = document.createElement("div");
    divTipo0.setAttribute("class", "div-tipo-0");
    let pType = document.createElement("p");
    pType.innerText = "Types: ";
    divTipo0.appendChild(pType);
    divTipo.appendChild(divTipo0);

    let divTipo1 = document.createElement("div");
    divTipo1.setAttribute("class", "div-tipo-1");
    let pType1 = document.createElement("p");
    pType1.innerText = tipos[0];
    divTipo1.appendChild(pType1);
    divTipo.appendChild(divTipo1);

    let divTipo2 = document.createElement("div");
    divTipo2.setAttribute("class", "div-tipo-2");
    let pType2 = document.createElement("p");
    pType2.innerText = tipos[1];
    divTipo2.appendChild(pType2);
    divTipo.appendChild(divTipo2);

    if (pType2.innerText == "undefined") {
      divTipo.removeChild(divTipo2);
    }

    let divInfo = document.createElement("div");
    divInfo.setAttribute("class", "div-info");
    div.appendChild(divInfo);

    let pWeak = document.createElement("p");
    pWeak.innerText = "Weak: " + weak;

    let pResistant = document.createElement("p");
    pResistant.innerText = "Strong: " + resistant;

    divInfo.appendChild(pResistant);
    divInfo.appendChild(pWeak);

    //Colocar el color al tipo

    if (pType1.innerText == "normal") {
      divTipo1.style["background-color"] = "#FFFFFF";
    } else if (pType2.innerText == "normal") {
      divTipo2.style["background-color"] = "#FFFFFF";
    }
    if (pType1.innerText == "fire") {
      divTipo1.style["background-color"] = "#ECA110";
    } else if (pType2.innerText == "fire") {
      divTipo2.style["background-color"] = "#ECA110";
    }
    if (pType1.innerText == "water") {
      divTipo1.style["background-color"] = "#219EBC";
    } else if (pType2.innerText == "water") {
      divTipo2.style["background-color"] = "#219EBC";
    }
    if (pType1.innerText == "grass") {
      divTipo1.style["background-color"] = "#84CF6A";
    } else if (pType2.innerText == "grass") {
      divTipo2.style["background-color"] = "#84CF6A";
    }
    if (pType1.innerText == "flying") {
      divTipo1.style["background-color"] = "#6E753A";
    } else if (pType2.innerText == "flying") {
      divTipo2.style["background-color"] = "#6E753A";
    }
    if (pType1.innerText == "fighting") {
      divTipo1.style["background-color"] = "#411D13";
      divTipo1.style.color = "white";
    } else if (pType2.innerText == "fighting") {
      divTipo2.style["background-color"] = "#411D13";
      divTipo2.style.color = "white";
    }
    if (pType1.innerText == "electric") {
      divTipo1.style["background-color"] = "#FFD60A";
    } else if (pType2.innerText == "electric") {
      divTipo2.style["background-color"] = "#FFD60A";
    }
    if (pType1.innerText == "ground") {
      divTipo1.style["background-color"] = "#AD803D";
    } else if (pType2.innerText == "ground") {
      divTipo2.style["background-color"] = "#AD803D";
    }
    if (pType1.innerText == "poison") {
      divTipo1.style["background-color"] = "#B280BE";
    } else if (pType2.innerText == "poison") {
      divTipo2.style["background-color"] = "#B280BE";
    }
    if (pType1.innerText == "rock") {
      divTipo1.style["background-color"] = "#4C5C68";
      divTipo1.style.color = "white";
    } else if (pType2.innerText == "rock") {
      divTipo2.style["background-color"] = "#4C5C68";
      divTipo2.style.color = "white";
    }
    if (pType1.innerText == "psychic") {
      divTipo1.style["background-color"] = "#A4133C";
      divTipo1.style.color = "white";
    } else if (pType2.innerText == "psychic") {
      divTipo2.style["background-color"] = "#A4133C";
      divTipo2.style.color = "white";
    }
    if (pType1.innerText == "ice") {
      divTipo1.style["background-color"] = "#8ECAE6";
    } else if (pType2.innerText == "ice") {
      divTipo2.style["background-color"] = "#8ECAE6";
    }
    if (pType1.innerText == "bug") {
      divTipo1.style["background-color"] = "#4B7F52";
    } else if (pType2.innerText == "bug") {
      divTipo2.style["background-color"] = "#4B7F52";
    }
    if (pType1.innerText == "ghost") {
      divTipo1.style["background-color"] = "#723C70";
    } else if (pType2.innerText == "ghost") {
      divTipo2.style["background-color"] = "#723C70";
    }
    if (pType1.innerText == "steel") {
      divTipo1.style["background-color"] = "#A0AEB7";
    } else if (pType2.innerText == "steel") {
      divTipo2.style["background-color"] = "#A0AEB7";
    }
    if (pType1.innerText == "dragon") {
      divTipo1.style["background-color"] = "#FE5F55";
    } else if (pType2.innerText == "dragon") {
      divTipo2.style["background-color"] = "#FE5F55";
    }
    if (pType1.innerText == "dark") {
      divTipo1.style["background-color"] = "#0D1B2A";
      divTipo1.style.color = "white";
    } else if (pType2.innerText == "dark") {
      divTipo2.style["background-color"] = "#0D1B2A";
      divTipo2.style.color = "white";
    }
    if (pType1.innerText == "fairy") {
      divTipo1.style["background-color"] = "#FDD1C9";
    } else if (pType2.innerText == "fairy") {
      divTipo2.style["background-color"] = "#FDD1C9";
    }
  }
  let stats = computeStats(datos);
  let spanKanto = document.getElementById("kanto-id");
  let spanJohto = document.getElementById("johto-id");

  spanKanto.innerHTML = stats[0];
  spanJohto.innerHTML = stats[1];
}
visualize(data["pokemon"]);

//Ordenar la Data

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

//Filtrar por tipo

const selectElementFil = document.getElementById("type");
selectElementFil.addEventListener("change", (event) => {
  let valor;
  if (event.target.value == "normal") {
    valor = filterData(datos, "normal");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "fire") {
    valor = filterData(datos, "fire");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "water") {
    valor = filterData(datos, "water");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "grass") {
    valor = filterData(datos, "grass");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "flying") {
    valor = filterData(datos, "flying");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "fighting") {
    valor = filterData(datos, "fighting");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "poison") {
    valor = filterData(datos, "poison");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "electric") {
    valor = filterData(datos, "electric");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "ground") {
    valor = filterData(datos, "ground");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "rock") {
    valor = filterData(datos, "rock");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "psychic") {
    valor = filterData(datos, "psychic");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "ice") {
    valor = filterData(datos, "ice");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "bug") {
    valor = filterData(datos, "bug");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "ghost") {
    valor = filterData(datos, "ghost");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "steel") {
    valor = filterData(datos, "steel");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "dragon") {
    valor = filterData(datos, "dragon");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "dark") {
    valor = filterData(datos, "dark");
    deleteall();
    visualize(valor);
  }
  if (event.target.value == "fairy") {
    valor = filterData(datos, "fairy");
    deleteall();
    visualize(valor);
  }
});

//Borrar los divs

function deleteall() {
  const dom = document.getElementById("root");
  while (dom.firstChild) {
    dom.removeChild(dom.firstChild);
  }
}

//Search-Bar

const searchBar = document.getElementById("search");

searchBar.addEventListener("keyup", (e) => {
  const search = e.target.value;
  const results = datos.filter((element) => {
    return element.name.includes(search) || element.num.includes(search);
  });
  deleteall();
  visualize(results);
});
