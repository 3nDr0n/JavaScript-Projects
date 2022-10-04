function concat() {  //function using the concat method to connect stings into a sentence
    var part_1="Do ";  //assignes values to variables
    var part_2="your ";
    var part_3="best!";
    var whole_sentence=part_1.concat(part_2, part_3); //variable that uses the concat method
    document.getElementById("sentence").innerHTML=whole_sentence;  //displays the connected strings inside given HTML element
}

function slice() {
    var sentence="Learn as if you will live forever, live like you will die tomorrow.";  //function using the slice method to cut a word out from a sentence
    var word=sentence.slice(0,6);  //method to cut a word out from sentence above
    var up=word.toUpperCase();  //method making the word uppercase
    document.getElementById("word").innerHTML=up;  ////displays the cut word in uppercase letters inside given HTML element
}

function string_method() {  //function to return number as string
    var X=167;  //assgning variable with value
    document.getElementById("lucky_number").innerHTML=X.toString(); //displays string inside given HTML element
}

function precision_method() {  //function to format number to specific lenght using precision method
    var X=167.214567;  //assgning variable with value
    document.getElementById("precise").innerHTML=X.toPrecision(5); ////displays formatted number inside given HTML element
}

function tofixed() {  //function using tofixed method to round numbers
    var X=1684.67;  //assigning variable with value
    document.getElementById("rounded").innerHTML=X.toFixed();  //returns rounded number inside given HTML element
}


var example="Example of the search method"  //creating variable
console.log(example.search("of"));  //displaying result of search method in console log
console.log(example.search("method"));  //displaying result of search method in console log

var valueof_example="Example of using valueof method";  //creating variable
console.log(valueof_example.valueOf());  //valueof method in console log