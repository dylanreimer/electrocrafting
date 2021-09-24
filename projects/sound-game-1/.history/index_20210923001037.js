// const backgroundColor = [230,220,190];
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


function preload(){

    sounds.forEach((sound, i) => {
        sounds[i] = loadSound(`sounds/${i}.wav`)
    })

    // for(let i = 0; i < sounds.length; i++){
    //     sounds[i] = loadSound(`sounds/${i}.mp3`)
    // }
}

function setup(){
    createCanvas(800, 800);
    background(230,220,190);
}

function draw(){
    drawCircle(ball1);
}

const drawCircle = ({x, y, r, strokeColor, fillColor}) => {
    stroke(strokeColor);
    fill(fillColor)
    ellipse(x, y, r);
}