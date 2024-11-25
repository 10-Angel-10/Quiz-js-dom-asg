let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");



let inputNum = document.getElementById("inputNum");
let inputColor = document.getElementById("inputColor");
let changeColorBtn = document.getElementById("changeColorBtn");
let resetBtn = document.getElementById("resetBtn");
let color= "";
let Num = "";




changeColorBtn.addEventListener("click", function(){
    color = inputColor.value;
    color = color.toLowerCase();
    
    Num = inputNum.value;

    switch(Num){
        case "1":
            box1.className = Box(color);
            break
        case "2":
            box2.className = Box(color);
            break
        case "3":
            box3.className = Box(color);
            break
        case "4":
            box4.className = Box(color);
            break
        case "5":
            box5.className = Box(color);
            break
        case "6":
            box6.className = Box(color);
            break
        case "7":
            box7.className = Box(color);
            break
        case "8":
            box8.className = Box(color);
            break

        default:
            alert("Enter a number 1-8");
            break
    }

})



function Box(color){
    switch(color){
        case "red":
            return "bg-red col-3 text-center boxSize";

        case "blue":
            return "bg-blue col-3 text-center boxSize";

        case "purple":
            return "bg-purple col-3 text-center boxSize";

        case "brown":
            return "bg-brown col-3 text-center boxSize";

        case "yellow":
            return "bg-yellow col-3 text-center boxSize";

        default:
            alert("Please enter a color")
            return "col-3 text-center boxSize";
    }
}



resetBtn.addEventListener("click", function(){
    box1.className = "col-3 text-center boxSize"
    box2.className = "col-3 text-center boxSize"
    box3.className = "col-3 text-center boxSize"
    box4.className = "col-3 text-center boxSize"
    box5.className = "col-3 text-center boxSize"
    box6.className = "col-3 text-center boxSize"
    box7.className = "col-3 text-center boxSize"
    box8.className = "col-3 text-center boxSize"
})