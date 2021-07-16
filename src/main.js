import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

/*console.log(example, data);*/
function visualize(data){
    for (let prop in data["pokemon"]){
        let numero = data["pokemon"][prop]["num"]
        let nombre = data["pokemon"][prop]["name"]
        let link = data["pokemon"][prop]["img"]
        let div = document.createElement("div")
        /*div.id = "div-poke-" + prop
        div.class = "divs-poke"*/
        div.setAttribute("class", "divs-poke")
        div.setAttribute("id", "div-poke-" + prop)
        let imgn = document.createElement("img")
        imgn.src=link
        /*imgn.style.display="flex"*/
        let divroot = document.getElementById("root")
        
        divroot.appendChild(div)
        div.appendChild(imgn)
        let div2 = document.createElement("div")
        /*div2.style.display="flex"*/
        let pNum = document.createElement("p")
        pNum.innerText = numero 
        
        let pName = document.createElement("p")
        pName.innerText = nombre 
        
        div2.appendChild(pNum)
        div2.appendChild(pName)
        div.appendChild(div2)
    }
}
visualize(data)