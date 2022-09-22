function pc() { //creates function named "pc"
    var laptop = {  //adds variables
        Make:"Asus",
        Model:"Zephyrus G15",
        Ram:"16GB",
        CPU:"AMD Ryzen 5900",
        GPU:"RTX 3080"
    };
    delete laptop.GPU //deletes a variable
    document.getElementById("Dictionary").innerHTML=laptop.GPU; //specifies the displayed variable when function is called
}