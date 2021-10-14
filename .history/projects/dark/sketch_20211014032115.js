const tileSize = 35;
const noiseScale = 0.1;
const speed = 5;
const buffer = 10;
const images = [[], [], [], []];
const probs = [1000, 4, 4, 4];

const closeRate = 7;
let started;

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
let spriteR;

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
  started = false;
  
  wait()
}

function wait() {
  createCanvas(1000, 1000);
  background(0, 40, 0)
  
  w = width / tileSize + buffer;
  h = height / tileSize + buffer;

  spriteX = width/2;
  spriteY = height/2;
  spriteR = 60;
  
  noStroke();
  colorMode(HSB);
  resetSketch()
}

function resetSketch() {
  

  music.play();
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
    if (height - spriteY > (3 * height/4)) {
      y -= speed;
    } else {
      spriteY -= speed;
    }
  }
  if (key === 's') {
    if (height - spriteY < (height/4)) {
      y += speed;
    } else {
      spriteY += speed;
    }
  }
  if (key === 'a') {
    if (width - spriteX > (3 * width/4)) {
      x -= speed;
    } else {
      spriteX -= speed;
    }
  }
  if (key === 'd') {
    if (width - spriteX < (width/4)) {
      x += speed;
    } else {
      spriteX += speed;
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
      
      // console.log(dist(spriteX, spriteY, x*tileSize+tileSize/2, y*tileSize+tileSize/2))
      // collision test
      // if ((i == 0 || i == 3) 
      // && dist(spriteX, spriteY, x*tileSize+(tileSize/2), y*tileSize+(tileSize/2)) < (spriteR)) {
      //   music.stop()
      //   setup()
      // }

      return images[i][0];
    }
  }
}

function closeIn() {
  if (!(timer % closeRate)) {
    resizeCanvas(width-1, height-1);
  }
}

function drawSprite() {
  fill(0, 0, 255)
  noStroke()
  ellipse(spriteX, spriteY, spriteR)
}

function draw() {
  if (!started) {
    textSize(32);
    text('PLAY', 10, 30);
    fill(0, 102, 153);
    

  } else {
  closeIn();
  clear();
  update();
  drawTerrain();
  drawMask();
  drawSprite();
  timer++;
  }
}

function update() {
  if (keyIsPressed) {
    checkKey(key);
  }
}