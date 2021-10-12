// const backgroundColor = [230,220,190];
myCanvas = { width: 600, height: 600};
backgroundColor = [205, 30, 94];
const lineColor = [0, 0, 0];
const activeLineColor = [190, 20, 110];
const lineWidth = 3;
const activelineWidth = 9;
const sounds = Array.from({ length: 6 });
let dist = 1;

let detailX;
let detailY;

let detailA;
let detailB;

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
    createCanvas(myCanvas.width, myCanvas.height, WEBGL);
    background(backgroundColor);

    detailX = createSlider(3, 24, 1);
    detailX.position((myCanvas.width - 400)/2, height + 5);
    detailX.style('width', '400px');

    detailY = createSlider(3, 16, 1);
    detailY.position((myCanvas.width - 400)/2, height + 30);
    detailY.style('width', '400px');

    detailA = createSlider(10, 200, 1);
    detailA.position((myCanvas.width - 400)/2, height + 5);
    detailA.style('width', '400px');

    detailB = createSlider(10, 200, 1);
    detailB.position((myCanvas.width - 400)/2, height + 30);
    detailB.style('width', '400px');
}


function draw() {
    background(backgroundColor);
    drawTorus(0.01);
    // for (let i = 0; i < 20; i++) {
    //     circle(myCanvas.width/2, myCanvas.height/2, ball1.size + (dist*i))+40;
    // }

    dist = (dist + 1) % 100;
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

function drawTorus(rotation) {
    stroke(180, 180, 180);
    fill(200, 200, 200);
    rotateX(frameCount * rotation);
    rotateY(frameCount * rotation);
    torus(detailA.value(), detailB.value(), detailX.value(), detailY.value());
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