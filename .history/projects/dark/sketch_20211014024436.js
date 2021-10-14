const tileSize = 35;
const noiseScale = 0.1;
const speed = 5;
const buffer = 10;
const images = [[], [], [], []];
const probs = [1000, 4, 4, 4];

const closeRate = 8;

var x = 0;
var y = 0;
var w = 0;
var h = 0;
var xRO = 0; 
var yRO = 0;
var xTO = 0;
var yTO = 0;

const tiles = [];

let timer;
let music;

let spriteX;
let spriteY;

let topCanvas;

function preload() {

  music = loadSound('assets/sounds/drop.m4a'),


  images[0].push(loadImage('assets/lava.png'));
  images[0].push(loadImage('assets/lava2.png'));
  images[1].push(loadImage('assets/lavarock.png'));
  images[1].push(loadImage('assets/lavarock2.png'));
  images[2].push(loadImage('assets/rock.png'));
  images[2].push(loadImage('assets/rock.png'));
  images[3].push(loadImage('assets/lava.png'));
  images[3].push(loadImage('assets/lava2.png'));
}

function setup() {
  resetSketch()
  
}

function resetSketch() {
  createCanvas(1000, 1000);
  topCanvas = createGraphics(1000, 1000);
  background(0, 40, 0)

  music.play();
  
  w = width / tileSize + buffer;
  h = height / tileSize + buffer;

  spriteX = width/2;
  spriteY = height/2;

  console.log(images)

  noStroke();
  colorMode(HSB);
  drawTerrain();
  drawMask();

  timer = 0;
}

function checkKey(key) {
  if (key == ' ') {
    noiseSeed(millis());
    drawTerrain();
  }
  if (key === 'w') {
    spriteY -= speed;
    console.log(height - spriteY )
    if (height - spriteY > (2 * height/3)) {
      y -= speed;
    }
  }
  if (key === 's') {
    spriteY += speed;
    if (height - spriteY < (height/3)) {
      y += speed;
    }
  }
  if (key === 'a') {
    spriteX -= speed;
    if (width - spriteX > (2 * width/3)) {
      x -= speed;
    }
  }
  if (key === 'd') {
    spriteX += speed;
    if (width - spriteX < (width/3)) {
      x += speed;
    }
  }
}

function drawTerrain() {
  xRO = x % tileSize;
  yRO = y % tileSize;
  xTO = parseInt(x / tileSize);
  yTO = parseInt(y / tileSize);
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      tiles[i + j * w] = getTile(i, j)
    }
  }
  
  for (let i = 0; i < w; i++) {
    for (let j = 0; j < h; j++) {
      image(tiles[i + j * w], (i - buffer / 2) * tileSize - xRO, (j - buffer / 2) * tileSize - yRO, tileSize, tileSize);
    }
  }
}

function drawMask() {
}

function getTile(x, y, terrainScales) {
  let v = noise((xTO + x) * noiseScale, (yTO + y) * noiseScale);
  let scales = [0.4, 0.5, 0.7, 1];
  for (let i = 0; i < scales.length; i++) {
    let terrainScale = scales[i];
    if (v <= terrainScale) {    
      return images[i][0];
    }
  }
}

function closeIn() {
  if (!(timer % closeRate)) {
    resizeCanvas(width-1, height-1);
    topCanvas.resizeCanvas(width-1, height-1);
  }
}

function drawSprite() {
  topCanvas.fill(0, 0, 255)
  topCanvas.noStroke()
  topCanvas.ellipse(spriteX, spriteY, 60)
}

function checkCollisions() {

}

function draw() {
  closeIn();
  clear();
  topCanvas.clear()
  update();
  drawTerrain();
  drawMask();
  drawSprite();
  checkCollisions();
  image(topCanvas, 0, 0)
  timer++;
}

function update() {
  if (keyIsPressed) {
    checkKey(key);
  }
}