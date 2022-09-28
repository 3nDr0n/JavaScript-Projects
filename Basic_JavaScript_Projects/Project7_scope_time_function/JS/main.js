var X=4; //creating global variable with value of four 
function To_Do_List_1() { //addition function
    var y=5 //creating local variable
    document.write(3+X+y+"<br>"); //addition using both global and local variables
}
function To_Do_List_2() { //second addition function using global variable
    document.write(X+4);
}
document.write("On your Professional To-Do list:")+To_Do_List_1(); //displays message with sum of first addition
document.write("On your Personal To-Do list:")+To_Do_List_2();  //displays message with sum of second addition

function get_Date() {  //function to get time
    if (new Date().getHours() <20) { //if conditional statement 
    document.getElementById("Being_Productive").innerHTML="Its still not too late to do something productive today!"; //displays message if condition is met
    }
}

function Productivity_Function() { //function using if and else statements
    Things = document.getElementById("Things").value; //sets value of variable based on user input
    if (Things >= 3) { //if statement comparing user input with set value
        Productive="You were very productive today, you deserve some rest!"; //displays message if input value is greater or equal to 3
    }
    else { //else statement displays displays message if conditions are not met
        Productive="You were quite lazy today, I`m sure you can do better.";
    }
    document.getElementById("Things_I_Did").innerHTML=Productive; //makes the message display within the given element based on the conditional statements
}

function Time_Function() { //Function to see what time of the day it is
    var Time=new Date().getHours(); //Method to get current time
    var Reply; //variable created
    if (Time <12==Time >0) { //conditional statement
        Reply="It is morning time, lets crack on with that to-do list!"; //if condition is met, displays message
    }
    else if (Time >12==Time <18) { //else if conditional statement displaying message based on time of day
        Reply="Its afternoon, you can still do something from your to-do list!";
    }
    else { //else statement displaying message if none of the above conditions are met
        Reply="It is evening time, get some rest now.";
    }
    document.getElementById("Time_of_day").innerHTML=Reply; //displays message within given HTML element based on conditional statements 
}
console.log(three+2) //console log with error