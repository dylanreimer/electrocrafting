const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

let pendulum;


function preload() {
  
}

function setup() {
    createCanvas(canvasWidth, canvasHeight);

    pendulum = new Pendulum(canvasWidth/2, canvasHeight/2, 200, 0.02, [255, 255, 255]);
}



function draw() {
    background(30);

    // pendulum.render();
    pendulum.update();

    console.log(pendulum.center)
  
}