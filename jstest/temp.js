
var output = 0;
var operator;
var x;
function display(output)
    {
    document.getElementById("output").innerHTML = output;
    }
    



document.getElementById("0-btn").onclick = function(){
    output = "" + output + 0
    output = Number(output)
    display(output)
}
document.getElementById("1-btn").onclick = function(){
    output = "" + output + 1
    output = Number(output)
    display(output)
}
document.getElementById("2-btn").onclick = function(){
    output = "" + output + 2
    output = Number(output)
    display(output)
}

document.getElementById("3-btn").onclick = function(){
    output = "" + output + 3
    output = Number(output)
    display(output)
}
document.getElementById("4-btn").onclick = function(){
    output = "" + output + 4
    output = Number(output)
    display(output)
}
document.getElementById("5-btn").onclick = function(){
    output = "" + output + 5
    output = Number(output)
    display(output)
}
document.getElementById("6-btn").onclick = function(){
    output = "" + output + 6
    output = Number(output)
    display(output)
}
document.getElementById("7-btn").onclick = function(){
    output = "" + output + 7
    output = Number(output)
    display(output)
}
document.getElementById("8-btn").onclick = function(){
    output = "" + output + 8
    output = Number(output)
    display(output)
}
document.getElementById("9-btn").onclick = function(){
    output = "" + output + 9
    output = Number(output)
    display(output)
}

document.getElementById("delete").onclick = function(){
    output = "" + output
    output = output.slice(0, -1)
    output = Number(output)
    if (output == NaN){
        output = 0;
    }
    display(output)
}



document.getElementById("clear").onclick = function() {
    output = 0;
    display(output);
}


document.getElementById("add").onclick =  function(){
    x = output
    operator = "+"
    output = 0
    display(output)
}


document.getElementById("subtract").onclick =  function(){
    x = output
    operator = "-"
    output = 0
    display(output)
}

document.getElementById("multiply").onclick =  function(){
    x = output
    operator = "x"
    output = 0
    display(output)
}


document.getElementById("equals").onclick =  function(){
    if (operator == "+")
    {
        output = x + output
    } 
    else if (operator == "-"){
        output = x - output;
    }
    else {
        output = x * output
    }
    
        
    
    display(output)
}






display(output)
