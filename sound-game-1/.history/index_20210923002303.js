// const backgroundColor = [230,220,190];
const myCanvas = { width: 600, height: 600};
const backgroundColor = [230,220,190];

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

const line1 = {
    x1: 50,
    y1: 0,
    x2: 50,
    y2: myCanvas.height,
    strokeColor: [0,0,0],
}

const line1 = {
    x1: myCanvas.width - 50,
    y1: 0,
    x2: myCanvas.width - 50,
    y2: myCanvas.height,
    strokeColor: [0,0,0],
}

const balls = [ball1, ball2, ball3];

const lines = [line1, line2];

function preload(){

    sounds.forEach((sound, i) => {
        sounds[i] = loadSound(`sounds/${i}.mp3`);
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

        move(ball);
        drawCircle(ball);

    })

}


const move = (ball) => {
    ball.x += ball.speed;
}


const drawCircle = ({x, y, r, strokeColor, fillColor}) => {
        stroke(strokeColor);
        fill(fillColor);
        ellipse(x, y, r);
}


const drawLine = ({x1, y1, x2, y2, strokeColor}) => {
    stroke(strokeColor);
    line(x1, y1, x2, y2);
}