var text="Hello World";  //declaring variable 
var length =text.length;  //method returning string length
document.write("The length of the string is "+length+"<br>"); //displays text+length of string

var X=45; 
document.write("value of var is "+X); //displays value of var
{
    let X=353;
    document.write("<br>"+"value of let inside a block is " + X);  //displays value of let inside block
}
document.write("<br>"+"value of var again outside the block is " +X); //displays value of var outside block


function Call_Loop() {  //function using while loop 
    var Digit="";
    var X="1";
    while (X<11) {
        Digit += "<br>" +X;
        X++;
    }
    document.getElementById("Loop").innerHTML=Digit;
}

var Instruments=["Guitar","Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute",]; //varible with multiple values
var Content="";
var Y;
function for_Loop() { //using for loop to display all values
    for (Y=0; Y < Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";    
    }
    document.getElementById("List_of_Instruments").innerHTML=Content; //displays all elements 
}

function array_Function() { //function using array
    var Cat_Picture=[] //creating array with their index
    Cat_Picture[0]="sleeping"; 
    Cat_Picture[1]="playing";
    Cat_Picture[2]="eating";
    Cat_Picture[3]="purring";
    document.getElementById("Array").innerHTML="In this picture, the cat is "+Cat_Picture[2] + "."; //displays message based on index given
}

function constant_function() { //function using a constant
    const computer={type:"laptop", brand:"Asus", CPU:"AMD"};
    computer.CPU="Intel";
    computer.price="1200";
    document.getElementById("Constant").innerHTML="The cost of the " +computer.type + " was " + computer.price + "."; //displays text withing given HTML element
}

let laptop = { //declaring let
    make:"Asus ", 
    model:"ROG Zephyrous G15 ",
    cpu: "Ryzen 9 ",
    ram: "16GB ",
    description: function() { //function using return method
        return "The laptop is an "+ this.make + this.model +" with "+ this.cpu + " and " +this.ram +" ram. ";
    }
};
document.getElementById("Laptop").innerHTML=laptop.description(); //displays text within given HTML element

