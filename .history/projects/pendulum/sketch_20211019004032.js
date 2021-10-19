const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

let pendulum;


function preload() {
  
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    pendulum = new Pendulum(center=500, start=300, size=100, radius=200, speed=0.01, color=[255, 255, 255]);

  
}



function draw() {
    background(30);

    pendulum.render();
    pendulum.update();

    console.log(pendulum.center)
  
}