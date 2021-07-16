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
  sortData: function(data, sortBy, sortOrder){
    const datos = data["pokemon"]
    console.log(sortBy)
    console.log(sortOrder)
    if (sortBy == "name" && sortOrder == "asc"){
      datos.sort(function (a, b){
        return (b["name"] - a["name"])
      })
      console.log(datos)
      return true
    }

  }
}

export default dataManipulator;