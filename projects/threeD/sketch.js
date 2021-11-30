let theta = 0;
let zoom = 0;

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

function setup() {
  createCanvas(canvasWidth, canvasHeight, WEBGL);
  fill(200,10,200);
  stroke(0);
}

function draw() {
  background(210);



  // rotateX(theta);
  rotateY(theta);
  
  // rotateZ(theta/5);
  

  push();
    fill(50,100,200);
    // sphere(50+(theta*12)%200);
    sphere((0+zoom)%2500);
  pop();

  push();
    fill(90,10,100);
    // rotateY(theta * 2);  
    //translate(400, 0, 0);
    sphere((1000+zoom)%2500);
  pop();


  push();
    fill(200,40,90);
    // rotateY(theta * 2);  
    //translate(400, 0, 0);
    sphere((2000+zoom)%2500);
  pop();

  
  
  




  theta+=0.01;
  zoom+=1 ;
}