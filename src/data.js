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
*/

const dataManipulator = {
  "sortData": function (data, sortBy, sortOrder) {
    const datos = data["pokemon"];
    console.log(sortBy);
    console.log(sortOrder);
    if (sortBy == "name" && sortOrder == "asc") {
      datos.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      return console.log(datos);
    }
    if (sortBy == "name" && sortOrder == "dsc") {
      datos.sort(function (a, b) {
        if (b.name > a.name) {
          return 1;
        }
        if (b.name < a.name) {
          return -1;
        }
        return 0;
      });
      return console.log(datos);
    }
    if (sortBy == "num" && sortOrder == "asc") {
      datos.sort(function (a, b) {
        if (a.num > b.num) {
          return 1;
        }
        if (a.num < b.num) {
          return -1;
        }
        return 0;
      });
      return console.log(datos);
    }
    if (sortBy == "num" && sortOrder == "dsc") {
      datos.sort(function (a, b) {
        if (b.num > a.num) {
          return 1;
        }
        if (b.num < a.num) {
          return -1;
        }
        return 0;
      });
      return console.log(datos);
    }
  },
};

export default dataManipulator;

