// ----------------------------------------------------
// Character Poem

const Billi = {
	home: "Brooklyn",
	currentLocation: "Changchun",
	identities: [Chinese, American],
	currentIdentityIndex: 1,
	oneTrueLove: "Nai Nai",
	emotions: ["crying", "pouting"],
	currentEmotionIndex: 1,
	keepSecret: (idx) => {
		if (emotions[idx] === 0) {
			return false;
		} else {
			return true;
		}
	},
	secretKept: "keepSecret(currentEmotionIndex)",
	deepMessageFromNaiNai: "life is not about what things one does, but rather how one does them",
};

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
    background(95, 138, 245)
    frameRate(5)
    for(let i = 0; i < numImages; i ++ ){
        imgs[i] = img.get( i * 20 + 30, 100, 20, 40)
    }
}

function draw(){
    image(imgs[counter%numImages], 400, 400, 100, 100)
    counter ++
}