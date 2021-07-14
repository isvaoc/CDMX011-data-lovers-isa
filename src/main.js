import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

/*console.log(example, data);*/
function visualize(data){
    for (let prop in data["pokemon"]){
        console.log(data["pokemon"][prop]["num"])
        console.log(data["pokemon"][prop]["name"])
        console.log(data["pokemon"][prop]["img"])
    }
}
visualize(data)