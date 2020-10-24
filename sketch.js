var angle = 0.0;
var speed = 0.005;
var option = 1;

function setup() {
 createCanvas(windowWidth, windowHeight);
}

function draw() {
 var lo = map(mouseX, 0, width, 10, 300);
 var li = map(mouseY, 0, height,10, 300);
 
 
 if(option == 1){
   background(255);
   fill(0);
   text("Salve apertando o digito S", 100, windowHeight - 50);
 }
 
 stroke(200);
 translate(width/2, height/2);
 rotate(angle);
 for(var i = 0;i < 5; i++){
   push();
   
   rotate(i*TWO_PI/5);
   translate(0, lo);
   fill(255, 0, random(100));
   rect(0, 0, 5, 5);
   
   rotate(angle);
   
   for(var j = 0; j < 5; j++){
     push();
     rotate(j*TWO_PI/5);
     translate(0, li);
     rect(0, 0, 30, 30);
     
     for(var k = 0; k < 5; k++){
       push();
       rotate(k*TWO_PI/5);
       translate(0, 50);
       rect(0, 0, 10, 10);
       pop();
     }
     pop();
   }   
   pop();
 }
 

resetMatrix(); 
angle += speed; 

}

function mousePressed(){
  if(option == 1){
     option = 0;
  }else{
   option = 1;
 }
 
 noStroke();
 fill(255);
 rect(100, windowHeight - 60, 150, 20);
}

function keyPressed() {
  if (keyCode == 83) {        
    saveCanvas('padrao', 'jpg');
  } 
}
