// const backgroundColor = [230,220,190];
const sounds = Array.from({ length: 6 });

const ball1 = {
    x: 300,
    y: 300,
    r: 100,
    fillColor: [0,220,20],
    strokeColor: [0, 220, 20]
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
    stroke(ball1.strokeColor);
    fill(ball1.fillColor);
    ellipse(ball1.x, ball1.y, ball1.r);
}