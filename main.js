var red = [0, 100, 63];
var orange = [25, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

var myName = "";

function changeVariable(){
  myName =document.getElementById('Name').value;
  drawName(myName, letterColors);

}
//This is to hide the picture and show it again 
var click = false;
$('#RICH').hide();
function showThem() {
    
    if (click) {
        $('#RICH').hide("slow");
        click = false;
    } else if (!click) {
        $('#RICH').show("fast");
        click = true;
    }
    
  }

function clearText()
{
    document.getElementById('Name').value = "";

  //Clearing the whole canvas because the above method is not working 
  //context.clearRect(0, 0, canvas.width, canvas.height);
  myName = "";
 drawName(myName, letterColors);
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


 drawName(myName, letterColors);
 bounceBubbles()
