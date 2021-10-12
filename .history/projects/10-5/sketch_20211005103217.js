// const backgroundColor = [230,220,190];
myCanvas = { width: 600, height: 600};
backgroundColor = [0, 0, 0];
const lineColor = [0, 0, 0];
const activeLineColor = [190, 20, 110];
const lineWidth = 3;
const activelineWidth = 9;
const sounds = Array.from({ length: 6 });
let dist = 1;


const ball1 = {
    x: myCanvas.width/2,
    y: myCanvas.height/2,
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
        
    for (let i = 0; i < 20; i++) {
        circle(myCanvas.width, myCanvas.height, ball1.size + dist*i);
    }

    dist = (dist + 2) % 30;
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