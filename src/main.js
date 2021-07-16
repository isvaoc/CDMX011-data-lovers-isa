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
   
import { sortData } from './data.js';
import data from './data/pokemon/pokemon.js';  
 
let carlitos=()=>{
let fernando=document.querySelector("#carlitos")
let div = document.createElement("div")
div.append("Soy una serpiete que anda por el boque")
/*div.id = "div-poke-" + prop
div.class = "divs-poke"*/
div.setAttribute("class", "carlote")
fernando.appendChild(div)
}

    carlitos()
    
function visualize(datos){
    for (let prop in datos["pokemon"]){
        let numero = datos["pokemon"][prop]["num"]
        let nombre = datos["pokemon"][prop]["name"]
        let link = datos["pokemon"][prop]["img"]
        let tipos = data["pokemon"][prop]["type"].map((type)=>type).join(", ")
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

        let pType =document.createElement("p")
        pType.innerText = tipos
        
        div2.appendChild(pNum)
        div2.appendChild(pName)
        div2.appendChild(pType)
        div.appendChild(div2)
    }
}
visualize(data);

const selectElement = document.getElementById('sort');
selectElement.addEventListener('change', (event) => {
    let sortBy
    let sortOrder
    
    if (event.target.value == "az"){
        sortBy="name";
        sortOrder="asc";
        sortData(data, sortBy, sortOrder)
        deleteall()
        visualize(data)
    }  else if (event.target.value == "za"){
        sortBy="name";
        sortOrder="dsc";
        sortData(data, sortBy, sortOrder)
        deleteall()
        visualize(data)
    } else if (event.target.value == "numa"){
        sortBy="num";
        sortOrder="asc";
        sortData(data, sortBy, sortOrder)
        deleteall()
        visualize(data)
    } else if (event.target.value == "numd"){
        sortBy="num";
        sortOrder="dsc";
        sortData(data, sortBy, sortOrder)
        deleteall()
        visualize(data)
    }
});


function deleteall(){
    const dom = document.getElementById("root")
    while(dom.firstChild){
        dom.removeChild(dom.firstChild)
    }
}



const searchBar= document.getElementById('search')

searchBar.addEventListener('keyup',(e)=>{
    console.log(e.target.value);

});