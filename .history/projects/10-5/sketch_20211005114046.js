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

let a = 1;
let b = 1;

PVector[][] globe;
let total = 75;

let offset = 0;

let m = 0;
let mchange = 0;

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
    
    console.log("X: %d, Y: %d", mouseX, mouseY);
    console.log("W: %d, H: %d", myCanvas.width, myCanvas.height);

    m = map(sin(mchange), -1, 1, 0, 7);
  mchange += 0.02;
  
  background(0);
  noStroke();
  lights();
  r = 200;
  for (let i = 0; i < total+1; i++) {
    lat = map(i, 0, total, -HALF_PI, HALF_PI);
    r2 = supershape(lat, m, 0.2, 1.7, 1.7);
    //float r2 = supershape(lat, 2, 10, 10, 10);
    for (let j = 0; j < total+1; j++) {
       lon = map(j, 0, total, -PI, PI);
       r1 = supershape(lon, m, 0.2, 1.7, 1.7);
      //float r1 = supershape(lon, 8, 60, 100, 30);
       x = r * r1 * cos(lon) * r2 * cos(lat);
       y = r * r1 * sin(lon) * r2 * cos(lat);
       z = r * r2 * sin(lat);
      globe[i][j] = new PVector(x, y, z);
    }
  }

  //stroke(255);
  //fill(255);
  //noFill();
  offset += 5;
  for (int i = 0; i < total; i++) {
    float hu = map(i, 0, total, 0, 255*6);
    fill((hu + offset) % 255 , 255, 255);
    beginShape(TRIANGLE_STRIP);
    for (int j = 0; j < total+1; j++) {
      PVector v1 = globe[i][j];
      vertex(v1.x, v1.y, v1.z);
      PVector v2 = globe[i+1][j];
      vertex(v2.x, v2.y, v2.z);
    }
    endShape();
  }
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