var red = [0, 100, 63];
var orange = [25, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

var myName = "Please enter a name above";

function changeVariable(){
  myName =document.getElementById('Name').value;
  drawName(myName, letterColors);

}

function clearText()
{
    document.getElementById('Name').value = "";
  myName = "Please enter a name above";
  //Clearing the whole canvas because the above method is not working 
  context.clearRect(0, 0, canvas.width, canvas.height);

}
var letterColors = [red, orange, green, blue, purple];
bubbleShape= "circle";

function changeShape(name){
  if (name == "circle") {
    bubbleShape = "circle";
  }
  else if (name =="square") {
    bubbleShape = "square";

  }
  else if (name=="heart"){
    bubbleShape ="heart";
  }
  else if (name=="glowing"){
    bubbleShape ="glowing";
  }
  else
  bubbleShape= "triangle";
}





/*if(10 <10) {
   bubbleShape = "circle";
}

else if (20==20){

  bubbleShape= "triangle";
}


else {
    bubbleShape = "square";
}*/
// from - http://cssdeck.com/labs/ql8jmgjt

/*function updateLog() {
  var one = $("#opt_1:checked").val() ? "On" : "Off"
  var two = $("#opt_2:checked").val() ? "On" : "Off"
  $(".log").html("PLease: " + one + "<br/>Work: " + two)
}

$(".radio-group__option").change(updateLog)*/
 drawName(myName, letterColors);
 bounceBubbles()
