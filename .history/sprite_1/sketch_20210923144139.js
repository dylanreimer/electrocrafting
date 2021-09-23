
let img;
let imgs = [];
let counter = 0;

function preload() {
  img = loadImage('[*].png')   
}

function setup() {
  createCanvas(1000, 1000)
  background(200, 200, 200)
}

function draw() {
  fill(200, 100, 0)
  ellipse(200, 200, 100)
}