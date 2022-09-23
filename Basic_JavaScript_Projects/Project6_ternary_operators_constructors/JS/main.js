function game_function() {  //creates function using ternary operation
    var age, can_play;  //assigns variables
    age=document.getElementById("age").value;  //sets value based on html user input
    can_play=(age<18)?"You are too young":"You are old enough";  //displays either value based on user input
    document.getElementById("play").innerHTML=can_play + " to play!"; //displays result
}
function Player(Name, Skill, Role,) {  //function using this and new keywords
    this.Player_Name=Name;
    this.Player_Skill=Skill;
    this.Player_Role=Role;
}
var Jack=new Player("Jack", "Grandmaster", "Warrior"); //multiple variables 
var Jill=new Player("Jill", "Apprentice", "Assassin");
var Dave=new Player("Dave", "Advanced", "Mage"); 
function opponent() {  //function displaying message  
    document.getElementById("New_and_This").innerHTML="Your opponent is " + Jack.Player_Name + " whose skill level is " + Jack.Player_Skill + " and their role is " + Jack.Player_Role +".";
}
function chances() {  //function using a nested function within
    document.getElementById("chance").innerHTML="Your chance of winning is " + winning_chance() + " percent!"; //displays message with result of nested addition function
    function winning_chance() {
        var starting_point=45;
        function addition() {starting_point +=3;} //nested function of a simple addition
        addition();
        return starting_point; //returns result
    }
}