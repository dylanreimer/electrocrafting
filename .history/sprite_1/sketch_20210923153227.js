// ----------------------------------------------------
// Character Poem

const Stanley = {
    occupation: 'office worker',
	personality: 'none',
	employeeNumber: 247,
    speaks: false,
	location: 'Mind Control Facility',
	passion: 'pushing buttons',
	married: true,
	obeys_command: (player) => {
		if (player) {
			return True;
		} else {
			return False;
		}
	}
}

// ----------------------------------------------------

let img
let imgs = []
let counter = 0
const numImages = 15

function preload(){
    img = loadImage('characters.png')
}

function setup(){
    createCanvas(1000, 1000)
    background(182, 183, 184)
    frameRate(5)
    for(let i = 0; i < numImages; i ++ ){
        imgs[i] = img.get( i * 40, 0, 185, 185)
    }
}

function draw(){
    image(imgs[counter%numImages], 200, 200, 500, 300)
    counter++
}