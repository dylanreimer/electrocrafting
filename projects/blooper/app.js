
/*  Most browsers require a user action to intiate AudioContext
This is a fix to allow tone to start on pageload*/
document.documentElement.addEventListener('mousedown', () => {
    if (Tone.context.state !== 'running') Tone.context.resume();
});


const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;


// variables

let logo;
let ctrl;

let fr = 60;
let bpm;
let notes = [];
let playline;
let type;
let frame;
let pause;
let quant;
let controls;

let registerMargin;

let secWidth = canvasWidth/3;
let secWidthBuf = 30;

let colors = [[155, 126, 222], 
              [255, 90, 95], 
              [118, 231, 205]];

let bassScale = ['C1', 'Db1', 'D1', 'Eb1', 'E1', 'G1', 'Gb1', 'A1', 'Ab1', 'C2', 'Bb1', 'D2', 'E2', 'G2'];
let keysScale = ['C3', 'Db3', 'D3', 'Eb3', 'E3', 'G3', 'Gb3', 'A3', 'Ab3', 'C4', 'Bb3', 'D4', 'E4', 'G4'];
let leadScale = ['C4', 'Db4', 'D4', 'Eb4', 'E4', 'G4', 'Gb4', 'A4', 'Ab4', 'C5', 'Bb4', 'D5', 'E5', 'G5'];

let scales = [bassScale, keysScale, leadScale];

let releases = ["2n", "8n", "3n"]

let scaleNotes = 13;

let instruments;



function preload() {

  font = loadFont('assets/CuteFont-Regular.otf');

}

function setup() {

    createCanvas(canvasWidth, canvasHeight);

    // initial variable values
    bpm = 100;
    type = 1;
    frame = 0;
    pause = false;
    controls = false;
    quant = 32;
    playline = new Playline();
    frameRate(fr);

    registerMargin = 25;


}

function runTone() {


  // TONE


  // bass

  const bass = new Tone.Synth().toDestination();
  // bass.oscillator.type = "sawtooth";
  bass.volume.value = -3;
  const Filter = new Tone.Filter(400, "lowpass").toDestination();
  bass.connect(Filter);

  // keys

  const keys = new Tone.PolySynth().toDestination();
  keys.volume.value = -5;
  const trem = new Tone.Tremolo(4, 0.4).toDestination().start();
  keys.connect(trem);
  const pp = new Tone.PingPongDelay("4n", 0.2).toDestination();
  pp.wet = 0.1;
  keys.connect(pp);

  // lead

  const lead = new Tone.FMSynth().toDestination();
  lead.volume.value = -22;
  const Filter2 = new Tone.Filter(900, "lowpass").toDestination();
  lead.connect(Filter2);
  const verb = new Tone.Freeverb(0.8, 1000).toDestination();
  verb.wet = 0.6;
  lead.connect(verb);
  const eq = new Tone.EQ3(0, -8, -15).toDestination();
  lead.connect(eq);


  instruments = [bass, keys, lead];

  // Tone.Transport.bpm.value = bpm;
  // Tone.Transport.loop = true;
  Tone.Transport.start("+0.1");


}


runTone();



function draw() {

  if (frame < 360) {
    
    Tone.start();

    let fade = map(frame, 270, 350, 0, 255, [0, 255])
    let fade2 = map(frame, 220, 320, 0, 255, [0, 255])
    let fadein = map(frame, 30, 100, 255, 0, [0, 255])

    let c = color(255, 245, 227, 255-fade);
    
    background(0);

    fill(c);
    rect(0, 0, canvasWidth, canvasHeight);

    textAlign(CENTER);
    textFont(font);
    textSize(120);
    fill(0, 0, 0, 255-fade2-fadein);
    text('blooper', canvasWidth/2, canvasHeight/2);

    textSize(50);
    fill(0, 0, 0, 255-fade2-fadein);
    text('press delete for controls', canvasWidth/2, canvasHeight/2 + 90);

    textSize(30);
    fill(0, 0, 0, 255-fade2-fadein);
    text('a creation by dylan', canvasWidth/2, canvasHeight/2 + 390);

  } else {

    background(0);

    if (controls) {

      background(255, 245, 227)

      textFont(font);
      textSize(110);
      fill(0, 0, 0, 255);
      text('controls', canvasWidth/2, canvasHeight/2 - 160);


      textSize(60);
      text('home row: add notes', canvasWidth/2, canvasHeight/2 - 50);

      text('z & x: switch instrument', canvasWidth/2, canvasHeight/2 + 10);

      text('space: pause', canvasWidth/2, canvasHeight/2 + 70);
      text('enter: clear notes', canvasWidth/2, canvasHeight/2 + 130);

      text('-: speed up', canvasWidth/2, canvasHeight/2 + 190);
      text('+: slow down', canvasWidth/2, canvasHeight/2 + 250);

    } else {

      drawNotes();
      playNotes();

      playline.update();
      playline.display();

      // drawTempo();

    }

  }

  if (!pause) {
    frame++;
    
  }
}


// NOTES


function addNote(frequency) {

  let newNote = new Note(frequency, type);
  notes.push(newNote);
  console.log(notes);

}

function drawNotes() {

  for (var i = 0; i < notes.length; i++) { 
    notes[i].display();
  }

}

function playNotes() {

  for (var i = 0; i < notes.length; i++) { 

    let yHigh = playline.y - 5 + registerMargin;
    let yLow = playline.y - 5 - registerMargin;
    let playFrameDiff = frame - notes[i].lastplayed; 

    if ((notes[i].y < yHigh) & (notes[i].y > yLow) & (playFrameDiff > 12)) {


      if (notes[i].triggers > 11) {
        notes.splice(i, 1);
      } else {
      notes[i].play();
      notes[i].lastplayed = frame;
      }

    }

  }

}

function clearNotes() {

  notes = [];

}


function drawTempo() {

  let size = 60;

  if ((frame/fr) % (120/bpm) < 0.6) {
    
    noStroke();
    fill(255);

    circle(0, 0, size); // top left
    circle(0, canvasHeight, size); // bottom left
    circle(canvasWidth, canvasHeight, size); // bottom right
    circle(canvasWidth, 0, size); // top right

  }

}




// KEYPRESSES

function keyPressed() {

  console.log(keyCode);

  if (keyCode === 65) {
    console.log("pressed: a");

    addNote(0);

  }
  if (keyCode === 87) {
    console.log("pressed: w");

    addNote(1);

  }
  if (keyCode === 83) {
    console.log("pressed: s");

    addNote(2);
    
  }
  if (keyCode === 69) {
    console.log("pressed: e");
    
    addNote(3);

  }
  if (keyCode === 68) {
    console.log("pressed: d");

    addNote(4);

  }
  if (keyCode === 70) {
    console.log("pressed: f");

    addNote(5);

  }
  if (keyCode === 84) {
    console.log("pressed: t");

    addNote(6);

  }
  if (keyCode === 71) {
    console.log("pressed: g");

    addNote(7);

  }
  if (keyCode === 89) {
    console.log("pressed: y");

    addNote(8);

  }
  if (keyCode === 72) {
    console.log("pressed: h");

    addNote(9);

  }
  if (keyCode === 85) {
    console.log("pressed: u");

    addNote(10);

  }
  if (keyCode === 74) {
    console.log("pressed: j");

    addNote(11);

  }

  if (keyCode === 75) {
    console.log("pressed: k");

    addNote(12);

  }

  if (keyCode === 76) {
    console.log("pressed: l");

    addNote(13);

  }

  if (keyCode === 90) {
    console.log("pressed: z");

    if (type > 0) {
      type--;
    }

    console.log(type);

  }

  if (keyCode === 88) {
    console.log("pressed: x");

    if (type < 2) {
      type++;
    }

    console.log(type);

  }

  if (keyCode === 32) {
    console.log("pressed: space");

    playline.toggle();
    pause = !pause;

  }

  if (keyCode === 13) {
    console.log("pressed: enter");

    clearNotes();

  }

  if (keyCode === 189) {
    console.log("pressed: -");

    if (bpm > 30) {
      bpm-=5;
    }
  }

  if (keyCode === 187) {
    console.log("pressed: =");

    if (bpm < 300) {
      bpm+=5;
    }
  }

  if (keyCode === 8) {
    console.log("pressed: delete");

    playline.toggle();
    pause = !pause;

    controls = !controls;

  }

}


class Playline {

    constructor() {
        this.y = 0;
        this.stopped = false;
      }

      update() {

        if (!this.stopped) {

          let lineframejump = canvasHeight / (fr * 60/bpm * 4);

          this.y = (this.y + lineframejump) % canvasHeight;

        }
      }

      display() {
        stroke(255)
        // line(0, this.y, canvasWidth, this.y);
      }

      toggle() {
        this.stopped = !this.stopped;
      }
      
}

class Note {

    constructor(frequency, type) {

        // type 0: bass
        // type 1: keys
        // type 2: lead

        this.type = type;
        
        let xsection = map(frequency, 0, scaleNotes, this.type*secWidth + secWidthBuf, (this.type+1)*secWidth - secWidthBuf);
        let yquant = playline.y - (playline.y % (canvasHeight/quant));

        this.x = xsection;
        this.y = yquant;
        this.r = 20;

        this.frequency = scales[this.type][frequency];
        this.color = color(colors[this.type][0] + Math.floor(Math.random() * 100)-50,
                           colors[this.type][1] + Math.floor(Math.random() * 100)-50,
                           colors[this.type][2] + Math.floor(Math.random() * 100)-50);

        this.lastplayed = 0;
        this.initial = frame;
        this.triggers = 0;

      }


      play() {

        instruments[this.type].triggerAttackRelease(this.frequency, releases[this.type]);
        this.triggers+=1;

      }

      display() {

        let framediff = (frame - this.initial) % (4 * 60 * fr/bpm);

        let distRad = map(framediff, 0, 50, 0, this.r * 8);

        noStroke()
        fill(this.color);
        ellipse(this.x, this.y, distRad);

        
      }

}

