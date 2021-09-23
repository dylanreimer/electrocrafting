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
	secretKept: keepSecret(currentEmotionIndex),
	deepMessageFromNaiNai: "life is not about what things one does, but rather how one does them",
};

// ----------------------------------------------------

let sprite_sheet;
let sprite = [];
let counter = 0;
const numImages = 3;

function preload() {
	sprite = loadImage("characters.png");
}

function setup() {
	createCanvas(1000, 1000);
	background(95, 138, 245);
	frameRate(10);
	for (let i = 0; i < numImages; i++) {
		sprite_sheet[i] = sprite.get(i * 20 + 30, 100, 20, 40);
	}
}

function draw() {
	image(sprite_sheet[counter % numImages], 400, 400, 100, 100);
	counter++;
}