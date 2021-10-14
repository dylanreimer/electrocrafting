let objectImg, marioImg, goombaImg
let images 
let themeSong, jumpSound, coinSound
let sounds 
let game
let pane
let paneX
let paneY


function preload(){
    objectsImg = loadImage('assets/items-objects.png')
    marioImg = loadImage('assets/mario-use.png')
    goombaImg = loadImage('assets/goombas.png')
    themeSong = loadSound('assets/sounds/Mario-theme-song.mp3'), 
    coinSound = loadSound('assets/sounds/Mario-coin-sound.mp3'),
    jumpSound = loadSound('assets/sounds/Mario-jump-sound.mp3'),
    dieSound = loadSound('assets/sounds/mario-dies.mp3')

    images = {
        objectsImg,
        marioImg, 
        goombaImg
    }

    sounds = {
        themeSong, 
        jumpSound, 
        coinSound,
    }
}

function setup(){
    createCanvas(gameSettings.width, gameSettings.height)
    game = new Game(images, sounds)
    // frameRate(15)

    // pane = createGraphics(400, 250);
    // paneX = width/2
    // paneY = length/2

}

function draw(){
    checkKeys() 
    game.update()
    game.render()
}

function checkKeys(){
    if(keyIsDown(UP_ARROW)){
        game.hero.forward()
        return
    } else if(keyIsDown(LEFT_ARROW)){
        game.hero.turnLeft()
        return
    } else if(keyIsDown(RIGHT_ARROW)){
        game.hero.turnRight()
        return
    }
}

function keyReleased(){
    // if(keyCode === UP_ARROW){
    //     game.hero.clearJump()
    // }
}

