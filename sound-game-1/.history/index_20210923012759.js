// const backgroundColor = [230,220,190];
const myCanvas = { width: 600, height: 600};
backgroundColor = [230, 230, 230];
const lineColor = [0, 0, 0];
const activeLineColor = [190, 20, 110];
const lineWidth = 3;
const activelineWidth = 9;
const sounds = Array.from({ length: 6 });
grav = 0.7;
count = 0;
run = true;

const ball1 = {
    x: 300,
    y: 100,
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
    y: 100,
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

const leftEdge = {
    x1: 0,
    y1: 110,
    x2: 600,
    y2: 110,
    color: lineColor,
    width: lineWidth,

}

const rightEdge = {
    x1: 0,
    y1: 470,
    x2: 600,
    y2: 470,
    color: lineColor,
    width: lineWidth,
}


const balls = [ball1, ball2, ball3];



function preload(){

    sounds.forEach((sound, i) => {
        sounds[i] = loadSound(`sounds/${i}.wav`)
    })

    console.log(sounds);

    ball1.rightSound = sounds[1];
    ball2.rightSound = sounds[2];
    ball3.rightSound = sounds[3];

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
    
    if (run) {
    balls.forEach((ball) => {
        updateBall(ball);
        displayBall(ball);
    })
    // drawLine(leftEdge);
    drawLine(rightEdge);
}
}


function updateBall(ball){
    console.log(backgroundColor);
    count += 1;

    if(ball.y + ball.size/2 > rightEdge.y1 - 10){
        ball.speed *= -1;
        ball.y -= 20;
        ball.rightSound.play();
        // activateLine(rightEdge);
    } 
    ball.speed += grav;
    grav += 0.00016;
    ball.size += 0.17;
    if (!ball.stopped) {
        ball.y+= ball.speed;
    }

    if (count > 2000) {
        backgroundColor[0] -= 0.2;
        backgroundColor[1] -= 0.2;
        backgroundColor[2] -= 0.2;
    }

    if (count > 5000) {
        run = false;
    }
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