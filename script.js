function docReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

let activatedDiv = "calculation"

function setvis(id) {
    activatedDiv = id;
    updatevis();
} 

function updatevis() {
    let elements = document.getElementsByClassName('content');
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.width = elements[i].id === activatedDiv ? '100%' : '0';
      elements[i].style.filter = elements[i].id === activatedDiv ? 'none' : 'grayscale(100%)';
    }
}

function ListNumbers(){
    let grid1 = document.getElementById("numbers")
    n.forEach(cell => {
        let div = document.createElement("div")
        div.setAttribute("class", cell.c)
        if(cell.type === "remove"){
            div.onclick = function(){
                removedigit()
            }
        }
        else if(cell.type === "equals"){
            div.onclick = function(){
                equals()
            }
        }
        else if(cell.type === "reset"){
            div.onclick = function(){
                reset()
            }
        }
        else{
            div.onclick = function(){
                newsymbol(cell.realt)
            }
        }
        let text = document.createElement("p")
        text.innerHTML = cell.t
        div.append(text)
        grid1.append(div)
    });
}

function ListUnits(){
    let grid2 = document.getElementById("units")
    u.forEach(cell => {
        let div = document.createElement("div")
        let text = document.createElement("p")
        text.innerHTML = cell.t
        div.append(text)
        grid2.append(div)
    });
}

var elt = document.getElementById('calculator');
var calcul = Desmos.GraphingCalculator(elt);
calcul.setExpression({ id: 'graph1', latex: 'y=x^2' });

docReady(ListUnits)
docReady(ListNumbers)
docReady(updatevis)