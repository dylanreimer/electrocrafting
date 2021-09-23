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
let hcount = 0;
const numImages = 42

function preload(){
    img = loadImage('characters.png')
}

function setup(){
    createCanvas(400, 800)
    background(182, 183, 184)
    frameRate(15)
    for(let i = 0; i < numImages; i ++ ){
        imgs[i] = img.get(i * 71 - 10, 5 + (20 * hcount%14), 180, 180)
    }
}

function draw(){
    image(imgs[counter%numImages], -60, -300, 1000, 1000)
    counter++
	hcount = counter % 42;
}