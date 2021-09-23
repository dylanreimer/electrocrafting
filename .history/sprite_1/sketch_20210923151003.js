// ----------------------------------------------------
// Character Poem

const Douglas = {
    occupation: 'language removal',
    location: {
        x: 'Hollywood blvd.',
        y: 'Vine blvd',
		coins: Infinity,
		mentalHealth: undefined,
		soundCollection: "HUGE_SOUND_COLLECTION",
		createSound: (sound) => (process) => process(sound)(),
		dreamAchieved: false,
		acheiveDream: (world) => (process) => process(world)(),
    },
}

// ----------------------------------------------------

let img
let imgs = []
let counter = 0
const numImages = 3

function preload(){
    img = loadImage('characters.png')
}

function setup(){
    createCanvas(1000, 1000)
    background(182, 183, 184)
    frameRate(5)
    for(let i = 0; i < numImages; i ++ ){
        imgs[i] = img.get( i * 20 + 30, 100, 20, 40)
    }
}

function draw(){
    image(imgs[counter%numImages], 400, 400, 100, 100)
    counter ++
}