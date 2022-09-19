function number_of_true_love() { //function for addtion
    var male=48;
    var female =21;
    var sum1=male+female;
    document.getElementById("Math").innerHTML=sum1;
}
function your_lucky_number() {  //function for division
    var destiny=48;
    var fate=12;
    var sum2=destiny/fate;
    document.getElementById("Math2").innerHTML=sum2;
}

function your_predicted_iq() { //function using multiple operators
    var iq=(17+8)*15/2-45;
    document.getElementById("Math3").innerHTML=iq;
}

function boring_program() {  //function using the remainder
    var bored=256%20;
    document.getElementById("Math4").innerHTML=bored;
}

function click_here() { //function using unary operator
    var x=10;
    document.getElementById("Math5").innerHTML="The effort that went into writing this program is:" + -x;
}
    var x=6; 
    x++;  //incremented number
    var y=6;
    y--;  //decremented number
    document.write(x+y+"is the result of a simple math operation using incremented and decremented numbers"); //displays the result with added text

window.alert(Math.random()*10); //creates a pop up alert displaying a random number

function baking() {
document.getElementById("pi").innerHTML = Math.PI; //function using a math object
}