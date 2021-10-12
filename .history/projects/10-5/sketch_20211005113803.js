// const backgroundColor = [230,220,190];
myCanvas = { width: 600, height: 600};
backgroundColor = [205, 30, 94];
const lineColor = [0, 0, 0];
const activeLineColor = [190, 20, 110];
const lineWidth = 3;
const activelineWidth = 9;
const sounds = Array.from({ length: 6 });
let dist = 1;

let detailX;
let detailY;

let detailA;
let detailB;


function setup(){
    createCanvas(myCanvas.width, myCanvas.height, WEBGL);
    background(backgroundColor);

    detailX = createSlider(3, 24, 20, 1);
    detailX.position((myCanvas.width - 400)/2, height + 5);
    detailX.style('width', '400px');

    detailY = createSlider(3, 24, 10, 1);
    detailY.position((myCanvas.width - 400)/2, height + 30);
    detailY.style('width', '400px');

    detailA = createSlider(15, 170, 100, 1);
    detailA.position(myCanvas.width - 185, (myCanvas.height)/2);
    detailA.style('width', '400px');
    detailA.style("transform","rotate(270deg)");

    detailB = createSlider(15, 170, 40, 1);
    detailB.position(myCanvas.width - 185 + 25, (myCanvas.height)/2);
    detailB.style('width', '400px');
    detailB.style("transform","rotate(270deg)");
}


function draw() {
    background(backgroundColor);
    drawTorus(0.01);
    dist = (dist + 1) % 100;
    console.log("X: %d, Y: %d", mouseX, mouseY);
    console.log("W: %d, H: %d", myCanvas.width, myCanvas.height);
}  

function mouseClicked() {
    if ((mouseX < myCanvas.width) & (mouseY < myCanvas.height)) {
        backgroundColor = [random(20, 235), random(20, 235), random(20, 235)];
    }
}

function drawTorus(rotation) {
    stroke(180, 180, 180);
    fill(200, 200, 200);
    rotateX(frameCount * rotation);
    rotateY(frameCount * rotation);
    torus(detailA.value(), detailB.value(), detailX.value(), detailY.value());
}

function supershape(theta, m, n1, n2, n3) {
    t1 = abs((1/a)*cos(m * theta / 4));
    t1 = pow(t1, n2);
    t2 = abs((1/b)*sin(m * theta/4));
    t2 = pow(t2, n3);
    t3 = t1 + t2;
    r = pow(t3, - 1 / n1);
    return r;
  }