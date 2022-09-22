document.write(typeof 3); //displays data type with typeof operator

function inf() {  //function demonstrating infinity 
    document.getElementById("infinity").innerHTML=3E369;
}
function neg_inf() {  //function demonstrating negative infinity
    document.getElementById("neg_infinity").innerHTML=-3E369;
}
function rs() {  //function using ==operator
    var rockstar= 10==10
    document.getElementById("rockstar").innerHTML=rockstar;
}
function hon() {  //function combining different data types
    var honest=5==="five"
    document.getElementById("honest").innerHTML=honest;
}

function funny() {  //function using the "and" boolean operator
    var funny= 3>2&&4<2
    document.getElementById("funny").innerHTML=funny;
}

function funnier() {  //function using === operator
    var funnier= 8===2
    document.getElementById("funnier").innerHTML=funnier;
}

console.log(9<7||5>2); //displays "true" in browser`s console

function over_yet() {  //function demonstrating the "Not" operator
    document.getElementById("over").innerHTML=!(19>12);
}