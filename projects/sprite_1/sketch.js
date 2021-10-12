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
let frame_rate = 25;
const numImages = 42;

function preload(){
    img = loadImage('characters.png')
}

function setup(){
    createCanvas(800, 800)
    background(182, 183, 184)
    frameRate(frame_rate)
    for(let i = 0; i < numImages; i ++ ){
        imgs[i] = img.get((i%14) * 71.2 - 9, 96 + (89 * Math.floor(i/14)), 80, 89)
    }
}

function draw(){
    image(imgs[counter%numImages], 250, 300, 80*3, 89*3)
	
	if (counter%42 < 21) {
		frame_rate+=2;
	} else {
		frame_rate-=2;
	}
	frameRate(frame_rate);

    counter++
	hcount = counter % 42;
	console.log(hcount)
}