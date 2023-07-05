var buynow = document.querySelectorAll(".card .btn");
var i;
for(i=0;i<3;i++){
buynow[i].addEventListener("click" , function () {
    var beep = new Audio("./Audio/beep-1.mp3")
    beep.play();
})
}




var flipPage =document.querySelectorAll(".flip-page");

for(i=0;i<5;i++){
flipPage[i].addEventListener("click", function(){
    var flipSound = new Audio("./Audio/flip-page.mp3")
    flipSound.play();
})
}