let conta = document.getElementById("conta")
let result = document.getElementById("finalresult")
let equal = false
let brackets = 0

function newsymbol(d){
    if(equal){
        result.innerHTML = "0"
    }
    if(conta.innerHTML.substring(0,1) === "0"){
        conta.innerHTML = ""
    }
    conta.innerHTML += d
}

function removedigit(){
    if(equal){
        result.innerHTML = "0"
    }
    conta.innerHTML = conta.innerHTML.substring(0, conta.innerHTML.length-1)
    if(conta.innerHTML === ""){
        conta.innerHTML = "0"
    }
}

function reset(){
    equal = false
    conta.innerHTML = "0"
    result.innerHTML = "0"
}

function bracket(p){
    let right = 0
    let left = 0
    for(i=0; i<p.length; i++){
        if(p.substring(i, i+1) === "("){
            right += 1
        }
        if(p.substring(i, i+1) === ")"){
            left += 1
        }
    }
    brackets = right - left
}

function equals(){
    bracket(conta.innerHTML)
    for(i=0; i<brackets; i++){
        conta.innerHTML += ")"
    }
    let finalresult = nerdamer(conta.innerHTML).evaluate().text()
    result.innerHTML = finalresult
    equal = true
}

let n = [
    {
        t:"CE",
        c:"dblue",
        realt:"",
        type:"reset"
    },
    {
        t:"(",
        c:"dblue",
        realt:"(",
        type:"exp"
    },
    {
        t:")",
        c:"dblue",
        realt:")",
        type:"exp"
    },
    {
        t:"%",
        c:"dblue",
        realt:"%",
        type:"exp"
    },
    {
        t:"&#9003;",
        c:"dblue",
        realt:"",
        type:"remove"
    },
    {
        t:"π",
        c:"dblue",
        realt:"pi",
        type:"number"
    },
    {
        t:"e",
        c:"dblue",
        realt:"e",
        type:"number"
    },
    {
        t:"abs",
        c:"blue",
        realt:"abs(",
        type:"exp"
    },
    {
        t:"floor",
        c:"blue",
        realt:"floor(",
        type:"exp"
    },
    {
        t:"ceil",
        c:"blue",
        realt:"ceil(",
        type:"exp"
    },
    {
        t:"log",
        c:"blue",
        realt:"log10(",
        type:"exp"
    },
    {
        t:"ln",
        c:"blue",
        realt:"log(",
        type:"exp"
    },
    {
        t:"sin",
        c:"blue",
        realt:"sin(",
        type:"exp"
    },
    {
        t:"cos",
        c:"blue",
        realt:"cos(",
        type:"exp"
    },
    {
        t:"tan",
        c:"blue",
        realt:"tan(",
        type:"exp"
    },
    {
        t:"√",
        c:"blue",
        realt:"sqrt(",
        type:"exp"
    },
    {
        t:"x!",
        c:"blue",
        realt:"fact(",
        type:"exp"
    },
    {
        t:"1",
        c:"white",
        realt:"1",
        type:"number"
    },
    {
        t:"2",
        c:"white",
        realt:"2",
        type:"number"
    },
    {
        t:"3",
        c:"white",
        realt:"3",
        type:"number"
    },
    {
        t:"x²",
        c:"blue",
        realt:"**2",
        type:"exp"
    },
    {
        t:"xʸ",
        c:"blue",
        realt:"**",
        type:"exp"
    },
    {
        t:"4",
        c:"white",
        realt:"4",
        type:"number"
    },
    {
        t:"5",
        c:"white",
        realt:"5",
        type:"number"
    },
    {
        t:"6",
        c:"white",
        realt:"6",
        type:"number"
    },
    {
        t:"x",
        c:"blue",
        realt:"*",
        type:"exp"
    },
    {
        t:"÷",
        c:"blue",
        realt:"/",
        type:"exp"
    },
    {
        t:"7",
        c:"white",
        realt:"7",
        type:"number"
    },
    {
        t:"8",
        c:"white",
        realt:"8",
        type:"number"
    },
    {
        t:"9",
        c:"white",
        realt:"9",
        type:"number"
    },
    {
        t:"+",
        c:"blue",
        realt:"+",
        type:"exp"
    },
    {
        t:"-",
        c:"blue",
        realt:"-",
        type:"exp"
    },
    {
        t:",",
        c:"white",
        realt:".",
        type:"number"
    },
    {
        t:"0",
        c:"white",
        realt:"0",
        type:"number"
    },
    {
        t:"=",
        c:"dblue",
        realt:"",
        type:"equals"
    }
]

let u = [
    {
        t:"Peso"
    },
    {
        t:"Temperatura"
    },
    {
        t:"Moeda"
    }
]