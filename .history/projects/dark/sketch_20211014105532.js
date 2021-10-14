const tileSize = 35;
const noiseScale = 0.1;
const speed = 5;
const buffer = 10;
const images = [[], [], [], []];
const probs = [1000, 4, 4, 4];

const closeRate = 7;
let started;
let rounds;

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
  
  resetSketch()
}

function resetSketch() {
  
  createCanvas(1000, 1000);
  clear()
  background(0, 40, 0)
  
  
  w = width / tileSize + buffer;
  h = height / tileSize + buffer;

  spriteX = width/2;
  spriteY = height/2;
  spriteR = 60;
  
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
  if (key === UP_ARROW) {
    if (height - spriteY > (3 * height/4)) {
      y -= speed;
    } else {
      spriteY -= speed;
    }
  }
  if (key === DOWN_ARROW) {
    if (height - spriteY < (height/4)) {
      y += speed;
    } else {
      spriteY += speed;
    }
  }
  if (key === LEFT_ARROW) {
    if (width - spriteX > (3 * width/4)) {
      x -= speed;
    } else {
      spriteX -= speed;
    }
  }
  if (key === RIGHT_ARROW) {
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
    fill(0xFFFFFF);
    textStyle(BOLD)
    textSize(360);
    text('PLAY', 20, 600);

  } else {
  closeIn();
  clear();
  update();
  drawTerrain();
  drawMask();
  drawSprite();
  timer++;
  message()
  }
  
  console.log(timer)
}

function update() {
  if (keyIsPressed) {
    checkKey(keyCode);
  }
}

function mouseClicked() {
  if (!started) {
    music.play();
    started = true;
  }
}

function message() {
  if (500 < timer && timer < 800) {
    fill(0xFFFFFF);
    textStyle(BOLD)
    textSize(40);
    text('mr. white circle? how did you end up here?', 50, 350);
  }
  if (1200 < timer && timer < 1500) {
    fill(0xFFFFFF);
    textStyle(BOLD)
    textSize(40);
    text('where is your family?', 200, 650);

  }
  if (1800 < timer && timer < 2100) {
    fill(0xFFFFFF);
    textStyle(BOLD)
    textSize(30);
    text('this is no place for your slender curvature!', 100, 100);
  }
  if (2500 < timer && timer < 2800) {
    fill(0xFFFFFF);
    textStyle(BOLD)
    textSize(20);
    text('what a pickle this is, oh dear...', 20, 130);
  }
  if (3100 < timer && timer < 3400) {
    fill(0xFFFFFF);
    textStyle(BOLD)
    textSize(30);
    text('you\'ve got to find a way out!', 20, 130);
  }
  if (3600 < timer && timer < 3900) {
    fill(0xFFFFFF);
    textStyle(BOLD)
    textSize(15);
    text('what? the developer hasn\'t added that yet?', 50, 350);

  }
  if (4000 < timer && timer < 4300) {
    fill(0xFFFFFF);
    textStyle(BOLD)
    textSize(20);
    text('he hasn\'t added collisions either!?', 30, 50);

  }
  
  if (4500 < timer && timer < 4530) {
    fill(0xFFFFFF);
    textStyle(BOLD)
    textSize(40);
    text('fuck', 10, 30);

  }
  // if (4300 < timer && timer < 4600) {
  //   fill(0xFFFFFF);
  //   textStyle(BOLD)
  //   textSize(20);
  //   text('well shit. guess this is it.', 80, 350);

  // }
  if (timer > 4530) {
    music.stop()
    started = false;
    resetSketch();
  }
}

