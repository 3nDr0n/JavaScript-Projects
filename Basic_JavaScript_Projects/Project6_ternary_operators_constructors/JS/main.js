function game_function() {
    var age, can_play;
    age=document.getElementById("age").value;
    can_play=(age<18)?"You are too young":"You are old enough";
    document.getElementById("play").innerHTML=can_play + " to play!";
}
function Player(Name, Skill, Role,) {
    this.Player_Name=Name;
    this.Player_Skill=Skill;
    this.Player_Role=Role;
}
var Jack=new Player("Jack", "Grandmaster", "Warrior");
var Jill=new Player("Jill", "Apprentice", "Assassin");
var Dave=new Player("Dave", "Advanced", "Mage"); 
function opponent() {
    document.getElementById("New_and_This").innerHTML="Your opponent is " + Jack.Player_Name + " whose skill level is " + Jack.Player_Skill + " and their role is " + Jack.Player_Role +".";
}
function chances() {
    document.getElementById("chance").innerHTML="Your chance of winning is " + winning_chance() + " percent!";
    function winning_chance() {
        var starting_point=45;
        function addition() {starting_point +=3;}
        addition();
        return starting_point;
    }
}