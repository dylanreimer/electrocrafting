
let sprite_sheet;
let sprites = [];
let counter = 0;

function preload() {
  sprite_sheet = loadImage('*.png');
}

function setup() {
  createCanvas(1000, 1000);
  for(let i = 0; i < 30; i++) {
    sprites[i] = sprite_sheet.get(i * 25 + 18, 10, 25, 37);
  }
}

function draw() {
  image(imgs[counter], 0, 0, 400, 600);
  counter++;
}