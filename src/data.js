/*
sortData(data, sortBy, sortOrder)
sortBy,  campos de la data se quiere ordenar. 
sortOrder, ascendente o descendente.

filterData(data, condition): esta función filter 
o filtrar recibiría la data, y nos retornaría 
aquellos datos que sí cumplan con la condición.
*/

//Función de Ordenar data

export function sortData(datos, sortBy, sortOrder) {
  if (sortBy == "name" && sortOrder == "asc") {
    datos.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      }
      return 0;
    });
  }
  if (sortBy == "name" && sortOrder == "dsc") {
    datos.sort(function (a, b) {
      if (a.name > b.name) {
        return -1;
      } else if (a.name < b.name) {
        return 1;
      }
      return 0;
    });
  }
  if (sortBy == "num" && sortOrder == "asc") {
    datos.sort(function (a, b) {
      if (a.num > b.num) {
        return 1;
      } else if (a.num < b.num) {
        return -1;
      }
      return 0;
    });
  }
  if (sortBy == "num" && sortOrder == "dsc") {
    datos.sort(function (a, b) {
      if (a.num > b.num) {
        return -1;
      } else if (a.num < b.num) {
        return 1;
      }
      return 0;
    });
  }
  return datos;
}

//Función de Filtrar data

export function filterData(datos, condition) {
  let array = [];
  if (condition == "normal") {
    array = datos.filter(function (ele) {
      return ele.type.includes("normal");
    });
  }
  if (condition == "fire") {
    array = datos.filter(function (ele) {
      return ele.type.includes("fire");
    });
  }
  if (condition == "water") {
    array = datos.filter(function (ele) {
      return ele.type.includes("water");
    });
  }
  if (condition == "water") {
    array = datos.filter(function (ele) {
      return ele.type.includes("water");
    });
  }
  if (condition == "grass") {
    array = datos.filter(function (ele) {
      return ele.type.includes("grass");
    });
  }
  if (condition == "flying") {
    array = datos.filter(function (ele) {
      return ele.type.includes("flying");
    });
  }
  if (condition == "fighting") {
    array = datos.filter(function (ele) {
      return ele.type.includes("fighting");
    });
  }
  if (condition == "poison") {
    array = datos.filter(function (ele) {
      return ele.type.includes("poison");
    });
  }
  if (condition == "electric") {
    array = datos.filter(function (ele) {
      return ele.type.includes("electric");
    });
  }
  if (condition == "ground") {
    array = datos.filter(function (ele) {
      return ele.type.includes("ground");
    });
  }
  if (condition == "rock") {
    array = datos.filter(function (ele) {
      return ele.type.includes("rock");
    });
  }
  if (condition == "psychic") {
    array = datos.filter(function (ele) {
      return ele.type.includes("psychic");
    });
  }
  if (condition == "ice") {
    array = datos.filter(function (ele) {
      return ele.type.includes("ice");
    });
  }
  if (condition == "bug") {
    array = datos.filter(function (ele) {
      return ele.type.includes("bug");
    });
  }
  if (condition == "ghost") {
    array = datos.filter(function (ele) {
      return ele.type.includes("ghost");
    });
  }
  if (condition == "steel") {
    array = datos.filter(function (ele) {
      return ele.type.includes("steel");
    });
  }
  if (condition == "dragon") {
    array = datos.filter(function (ele) {
      return ele.type.includes("dragon");
    });
  }
  if (condition == "dark") {
    array = datos.filter(function (ele) {
      return ele.type.includes("dark");
    });
  }
  if (condition == "fairy") {
    array = datos.filter(function (ele) {
      return ele.type.includes("fairy");
    });
  }
  return array;
}

//Función estadistica

export function computeStats(array) {
  let pointsKanto = 0;
  let pointsJohto = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].generation.name == "kanto") {
      pointsKanto = pointsKanto + 1;
    } else if (array[i].generation.name == "johto") {
      pointsJohto = pointsJohto + 1;
    }
  }

  let percentKanto = ((pointsKanto / array.length) * 100).toFixed(1);
  let percentJohto = ((pointsJohto / array.length) * 100).toFixed(1);
  if (percentJohto == "NaN") {
    percentJohto = 0;
  }
  if (percentKanto == "NaN") {
    percentKanto = 0;
  }
  let listPercents = [percentKanto, percentJohto];

  return listPercents;
}
