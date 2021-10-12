// const backgroundColor = [230,220,190];
myCanvas = { width: 600, height: 600};
backgroundColor = [255, 255, 255];
const lineColor = [0, 0, 0];
const activeLineColor = [190, 20, 110];
const lineWidth = 3;
const activelineWidth = 9;
const sounds = Array.from({ length: 6 });
grav = 0.7;


const ball1 = {
    x: 300,
    y: 140,
    size: 100,
    speed: 0.3,
    fillColor: [255,0,0],
    strokeColor: [0,0,0],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 2000,
    stopped: false,
} 

const ball2 = {
    x: 200,
    y: 100,
    size: 50,
    speed: 1,
    fillColor: [0,0,255],
    strokeColor: [0,0,0],
    ballStrokeWeight: 2,
    rightSound: sounds[2],
    leftSound: sounds[3],
    soundLength: 1000,
    stopped: false,
} 

const ball3 = {
    x: 400,
    y: 110,
    size: 80,
    speed: 2,
    fillColor: [255, 255, 0],
    strokeColor: [0,0,0],
    ballStrokeWeight: 2,
    rightSound: sounds[4],
    leftSound: sounds[5],
    soundLength: 500,
    stopped: false,
} 

const balls = [ball1, ball2, ball3];



function preload(){
}

function setup(){
    createCanvas(myCanvas.width, myCanvas.height);
    background(backgroundColor);
}


function draw() {
    background(backgroundColor);
    
    updateBall(ball1);
    displayBall(ball1);
}


function updateBall(ball){
    console.log(backgroundColor);
}

const displayBall = ({x, y, size, strokeColor, fillColor, ballStrokeWeight}) => {
        stroke(strokeColor);
        fill(fillColor);
        strokeWeight(ballStrokeWeight);
        ellipse(x, y, size);
}

function drawLine({x1, y1, x2, y2, color, width}){
    stroke(color);
    strokeWeight(width);
    line(x1, y1, x2, y2);
}



function activateLine(line){

    line.color = activeLineColor;
    line.width = activelineWidth;

    setTimeout(() => resetLines(line), 500);
}


function resetLines(line){
    line.color = lineColor;
    line.width = lineWidth;
}