// estas funciones son de ejemplo

/*export const example = () => {
 return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};

sortData(data, sortBy, sortOrder)
sortBy,  campos de la data se quiere ordenar. 
sortOrder, ascendente o descendente.

filterData(data, condition): esta función filter 
o filtrar recibiría la data, y nos retornaría 
aquellos datos que sí cumplan con la condición.
*/

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

export function filterData(datos, condition) {
  if (condition == "normal") {
    let array = datos.filter(function (ele) {
      return ele.type.includes("normal");
    });
    return array;
  }
  if (condition == "fire") {
    let array = datos.filter(function (ele) {
      return ele.type.includes("fire");
    });
    return array;
  }
  if (condition == "water") {
    let array = datos.filter(function (ele) {
      return ele.type.includes("water");
    });
    return array;
  }
  if (condition == "water") {
    let array = datos.filter(function (ele) {
      return ele.type.includes("water");
    });
    return array;
  }
  if (condition == "grass") {
    let array = datos.filter(function (ele) {
      return ele.type.includes("grass");
    });
    return array;
  }
  if (condition == "flying") {
    let array = datos.filter(function (ele) {
      return ele.type.includes("flying");
    });
    return array;
  }
  if (condition == "fighting") {
    let array = datos.filter(function (ele) {
      return ele.type.includes("fighting");
    });
    return array;
  }
  if (condition == "poison") {
    let array = datos.filter(function (ele) {
      return ele.type.includes("poison");
    });
    return array;
  }
  if (condition == "electric") {
    let array = datos.filter(function (ele) {
      return ele.type.includes("electric");
    });
    return array;
  }
  if (condition == "ground") {
    let array = datos.filter(function (ele) {
      return ele.type.includes("ground");
    });
    return array;
  }
  if (condition == "rock") {
    let array = datos.filter(function (ele) {
      return ele.type.includes("rock");
    });
    return array;
  }
  if (condition == "psychic") {
    let array = datos.filter(function (ele) {
      return ele.type.includes("psychic");
    });
    return array;
  }
  if (condition == "ice") {
    let array = datos.filter(function (ele) {
      return ele.type.includes("ice");
    });
    return array;
  }
  if (condition == "bug") {
    let array = datos.filter(function (ele) {
      return ele.type.includes("bug");
    });
    return array;
  }
  if (condition == "ghost") {
    let array = datos.filter(function (ele) {
      return ele.type.includes("ghost");
    });
    return array;
  }
  if (condition == "steel") {
    let array = datos.filter(function (ele) {
      return ele.type.includes("steel");
    });
    return array;
  }
  if (condition == "dragon") {
    let array = datos.filter(function (ele) {
      return ele.type.includes("dragon");
    });
    return array;
  }
  if (condition == "dark") {
    let array = datos.filter(function (ele) {
      return ele.type.includes("dark");
    });
    return array;
  }
  if (condition == "fairy") {
    let array = datos.filter(function (ele) {
      return ele.type.includes("fairy");
    });
    return array;
  }
}
