document.write(typeof 3);

function inf() {
    document.getElementById("infinity").innerHTML=3E369;
}
function neg_inf() {
    document.getElementById("neg_infinity").innerHTML=-3E369;
}
function rs() {
    var rockstar= 10==10
    document.getElementById("rockstar").innerHTML=rockstar;
}
function hon() {
    var honest=5==="five"
    document.getElementById("honest").innerHTML=honest;
}

function funny() {
    var funny= 3>2&&4<2
    document.getElementById("funny").innerHTML=funny;
}

function funnier() {
    var funnier= 8===2
    document.getElementById("funnier").innerHTML=funnier;
}

console.log(9<7||5>2);

function over_yet() {
    document.getElementById("over").innerHTML=!(19>12);
}