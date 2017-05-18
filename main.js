//Random colour generator 
//Still not working when I try to implement it 
/*function colorGenerator()
{
  
  var seedBasedVariable = Math.sin(seed++) * 16777215 //10000;
  var colorCode ='#'+Math.floor(Math.random(seedbasedVariable)*16777215).toString(16);
  */
  function colorGenerator() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }
/*  //Trying to seed the random function to generate random hex numbers
  var colorCode = '#'+ Math.floor((Math.abs(Math.sin(seed) * 16777215)) % 16777215).toString(16);
  return colorCode;*/


//
//Assigning the function to variables
//I know this is inefficient but I am using this method for debugging purposes
var color1 =colorGenerator;
var color2 =colorGenerator;
var color3 = colorGenerator;
var color4 = colorGenerator;
var color5 = colorGenerator;
var color6 = colorGenerator;


/*var red = [0, 100, 63];
var orange = [25, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];*/

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
var letterColors =[color1,color2,color3,color4,color5,color6]; //[red, orange, green, blue, purple];
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
