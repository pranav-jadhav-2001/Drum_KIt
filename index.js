
 var nod=document.querySelectorAll(".drum").length;

for(var i=0; i<nod;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var uses = this.innerHTML;
    switch(uses){
      case "w":
        var audio1 =new Audio("sounds/crash.mp3");
        audio1.play();
        break;
      case "a":
        var audio2=new Audio("sounds/kick-bass.mp3");
        audio2.play();
        break;
      case "s":
        var audio2=new Audio("sounds/snare.mp3");
        audio2.play();
        break;
      case "d":
        var audio2=new Audio("sounds/tom-1.mp3");
        audio2.play();
        break;
      case "j":
        var audio2=new Audio("sounds/tom-2.mp3");
        audio2.play();
        break;
      case "k":
        var audio2=new Audio("sounds/tom-3.mp3");
        audio2.play();
        break;
      case "l":
        var audio2=new Audio("sounds/tom-4.mp3");
        audio2.play();
        break;

    }
    document.querySelector("."+uses).classList.add("pressed");
    setTimeout(function(){
      document.querySelector("."+uses).classList.remove("pressed");
    },100);

  });
}
document.addEventListener("keypress",function(evi){
 var ke=  evi.key;

 switch(ke){
   case "w":
     var audio1 =new Audio("sounds/crash.mp3");
     audio1.play();
     break;
   case "a":
     var audio2=new Audio("sounds/kick-bass.mp3");
     audio2.play();
     break;
   case "s":
     var audio2=new Audio("sounds/snare.mp3");
     audio2.play();
     break;
   case "d":
     var audio2=new Audio("sounds/tom-1.mp3");
     audio2.play();
     break;
   case "j":
     var audio2=new Audio("sounds/tom-2.mp3");
     audio2.play();
     break;
   case "k":
     var audio2=new Audio("sounds/tom-3.mp3");
     audio2.play();
     break;
   case "l":
     var audio2=new Audio("sounds/tom-4.mp3");
     audio2.play();
     break;
 }
 document.querySelector("."+ke).classList.add("pressed");
 setTimeout(function(){
   document.querySelector("."+ke).classList.remove("pressed");
 },100);

});
