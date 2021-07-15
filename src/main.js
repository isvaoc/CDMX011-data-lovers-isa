import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

/*console.log(example, data);*/





let users= data.pokemon;
function hola(users){
for(let i=0; i<users.length; i++){
    let num= (users[i]["num"]);
    console.log(num);
    let newDiv= document.createElement("div");
    newDiv.innerHTML=("hola"+ num);
   document.body.appendChild(newDiv);
   
 

   
    
}
}
hola(users);

