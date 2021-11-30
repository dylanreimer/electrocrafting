// can't forget the global variables
let lim, fft; 
const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

// load the sound
function preload(){
  lim = loadSound('assets/10-28-1.mp3');
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  noFill();
  lim.rate(1.0);
  lim.loop();
  // make a new fft instance
  fft = new p5.FFT();
}

function draw() {
  background(210);
    // each time through the loop we get an array of data
    spectrum = fft.analyze();
    // loop over that data and draw a circle using the data
    spectrum.forEach((item,idx) => {
      // strokeWeight(5);
      // stroke(idx, 0, 120); 
      noStroke();
      fill(item*2,50 + (idx)*2,100);
      square(idx * 10, canvasHeight/2 - item * 1.6, 20 + (idx)*5)
      //line(idx * 60, idx * 60, item * 2, item * 3)
      //ellipse(idx * 10, height/2, 10, item * 2)
    })  
}
