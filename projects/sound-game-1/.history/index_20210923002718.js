// const backgroundColor = [230,220,190];
const myCanvas = { width: 600, height: 600};
const backgroundColor = [230,220,190];
const lineColor = [0, 0, 0];
const activeLineColor = [190, 20, 110];
const lineWidth = 3;
const activelineWidth = 9;
const sounds = Array.from({ length: 6 });

const ball1 = {
    x: 300,
    y: 300,
    r: 100,
    speed: 1,
    fillColor: [190,80,230],
    strokeColor: [0,220,20],
    outlineWidth: 6,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 2000,
} 

const ball2 = {
    x: 300,
    y: 100,
    r: 50,
    speed: 2,
    fillColor: [190,80,230],
    strokeColor: [0,220,20],
    outlineWidth: 6,
    rightSound: sounds[2],
    leftSound: sounds[3],
    soundLength: 1000,
} 

const ball3 = {
    x: 300,
    y: 200,
    r: 80,
    speed: 2,
    fillColor: [190,80,230],
    strokeColor: [0,220,20],
    outlineWidth: 6,
    rightSound: sounds[4],
    leftSound: sounds[5],
    soundLength: 500,
} 

const leftEdge = {
    x1: 230,
    y1: 0,
    x2: 230,
    y2: 600,
    color: lineColor,
    width: lineWidth,

}

const rightEdge = {
    x1: 370,
    y1: 0,
    x2: 370,
    y2: 600,
    color: lineColor,
    width: lineWidth,
}


const balls = [ball1, ball2, ball3];



function preload(){

    sounds.forEach((sound, i) => {
        sounds[i] = loadSound(`sounds/${i}.mp3`)
    })

    // for(let i = 0; i < sounds.length; i++){
    //     sounds[i] = loadSound(`sounds/${i}.mp3`)
    // }
}

function setup(){
    createCanvas(myCanvas.width, myCanvas.height);
    background(backgroundColor);
}



function draw(){
    
    background(backgroundColor);

    balls.forEach((ball) => {
        moveBall(ball);
        displayBall(ball);
    })
    drawLine(leftEdge);
    drawLine(rightEdge);
}


const moveBall = (ball) => {
    ball.x += ball.speed;
}


const displayBall = ({x, y, r, strokeColor, fillColor}) => {
        stroke(strokeColor);
        fill(fillColor)
        ellipse(x, y, r);
}



function drawLine({x1, y1, x2, y2, color, width}){
    stroke(color);
    strokeWeight(width);
    line(x1, y1, x2, y2);
}