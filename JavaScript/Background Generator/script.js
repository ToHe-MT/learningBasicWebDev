var body = document.querySelector("BODY");
var color1= document.querySelector(".color1")
var color2= document.querySelector(".color2")
var h3= document.querySelector("H3");
var direction = document.getElementsByName("directions")
var random= document.querySelector("BUTTON")
changeBGandH3();

function changeBGandH3(){
    var dir = document.querySelector('input[name="directions"]:checked').value; 
    body.style.background = "linear-gradient(" + dir  +", "+ color1.value + "," + color2.value + ")";
    h3.innerHTML = "linear-gradient(" + dir  +", "+ color1.value + "," + color2.value + ")";
    }

function getRandomColor(){
    var randomColor1=Math.floor(Math.random()*16777215).toString(16);
    var randomColor2=Math.floor(Math.random()*16777215).toString(16);
    var dir = document.querySelector('input[name="directions"]:checked').value; 
    color1.value = "#" + randomColor1;
    color2.value = "#" + randomColor2;
    document.body.style.backgroundColor = "linear-gradient(" + dir  +", "+ color1.value + "," + color2.value + ")";
    changeBGandH3();
}
color1.addEventListener("input", changeBGandH3);
color2.addEventListener("input", changeBGandH3);
direction[0].addEventListener("click", changeBGandH3);
direction[1].addEventListener("click", changeBGandH3);
random.addEventListener("click", getRandomColor);

