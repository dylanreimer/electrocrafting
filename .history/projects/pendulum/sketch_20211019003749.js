const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

let pendulum;


function preload() {
  
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    pendulum = new Pendulum();

  
}



function draw() {
    background(30);

    pendulum.render();
    pendulum.update();

    console.log(pendulum.angle)
  
}