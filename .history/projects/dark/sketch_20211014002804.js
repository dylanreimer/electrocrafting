let objectImg, marioImg, enemyImg
let images 
let themeSong, jumpSound
let sounds 
let game
let pane
let paneX
let paneY


function preload(){
    objectsImg = loadImage('assets/items-objects.png')
    marioImg = loadImage('assets/mario-use.png')
    enemyImg = loadImage('assets/goombas.png')
    themeSong = loadSound('assets/sounds/Mario-theme-song.mp3'), 
    jumpSound = loadSound('assets/sounds/Mario-jump-sound.mp3'),
    dieSound = loadSound('assets/sounds/mario-dies.mp3')

    images = {
        objectsImg,
        marioImg, 
        enemyImg
    }
}

function setup(){
    createCanvas(gameSettings.width, gameSettings.height)
    game = new Game(images, sounds)
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

