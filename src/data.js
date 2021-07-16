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


export function sortData(data, sortBy, sortOrder){ 
    const datos = data["pokemon"]
    console.log(sortBy)
    console.log(sortOrder)
    if (sortBy == "name" && sortOrder == "asc"){
      datos.sort(function (a, b){
        if (a.name > b.name) { 
          return 1;
        } else if (a.name < b.name) {
          return -1;
        } 
          return 0;
      });
      console.log("name ascendente")
      console.log(data["pokemon"][0]["name"])
    }
    if (sortBy == "name" && sortOrder == "dsc"){
      datos.sort(function (a, b){
        if (a.name > b.name) { 
          return -1;
        } else if (a.name < b.name) {
          return 1;
        } 
          return 0;
      });
      console.log("name descendente")
      console.log(data["pokemon"][0]["name"])
    }
    if (sortBy == "num" && sortOrder == "asc"){
      datos.sort(function (a, b){
        if (a.num > b.num) { 
          return 1;
        } else if (a.num < b.num) {
          return -1;
        } 
          return 0;
    });
    console.log("numero ascendente")
    console.log(data["pokemon"][0]["num"])
    }
    if (sortBy == "num" && sortOrder == "dsc"){
      datos.sort(function (a, b){
        if (a.num > b.num) { 
          return -1;
        } else if (a.num < b.num) {
          return 1;
        } 
          return 0;
    });
    console.log("numero descendente")
    console.log(data["pokemon"][0]["num"])
    }
    console.log(datos)
    return datos
}
