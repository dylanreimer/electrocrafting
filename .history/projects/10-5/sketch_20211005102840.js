// const backgroundColor = [230,220,190];
myCanvas = { width: 600, height: 600};
backgroundColor = [0, 0, 0];
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
    ballStrokeWeight: 0,
} 

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

function resetLines(line){
    line.color = lineColor;
    line.width = lineWidth;
}