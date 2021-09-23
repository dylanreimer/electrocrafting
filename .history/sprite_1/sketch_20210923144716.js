
let img
let imgs = []
let counter = 0
const numImages = 6

function preload(){
    img = loadImage('characters.png')
}

function setup(){
    createCanvas(1000, 1000)
    background(95, 138, 245)
    frameRate(10)
    for(let i = 0; i < numImages; i ++ ){
        imgs[i] = img.get( i * 20 + 30, 100, 20, 40)
    }
}

function draw(){
    image(imgs[counter%numImages], 400, 400, 100, 100)
    counter ++
}