let pattern2 = [];    //main pattern array
let grid = 200;       
let swatchSize = 400


function setup() {
  createCanvas(400, 400);
  frameRate(1);
  
  RCR1 = int(random(0,255))
  RCG1 = int(random(0,255))
  RCB1 = int(random(0,255))
  
  RCR2 = int(random(0,255))
  RCG2 = int(random(0,255))
  RCB2 = int(random(0,255))
  
}

function draw() {
  
  background(220);
  
  colour1 = color(RCR1,RCG1,RCB1,50);
  colour2 = color(RCR2,RCG2,RCB2,50);
  
  let lerpA = lerpColor(colour1, colour2, 0.33);
  let lerpB = lerpColor(colour1, colour2, 0.66);
  
  fill(lerpB);
  rect(0,0,400,400);
  
  for (let x2 = 0; x2 < width; x2 = x2 + grid) {
    for (let y2 = 0; y2 < height; y2 = y2 + grid) {
      let x = 0 + x2;
      let y = 0 + y2;
      let fullx = 200 + x2;
      let fully = 200 + y2;
      
      fill(colour1);
      pattern2[0] = new Pattern(x, y, fullx, fully);
      pattern2[0].generate();
      pattern2[0].display();
      
      fill(lerpA);
      pattern2[1] = new Pattern(x, y, fullx, fully);
      pattern2[1].generate();
      pattern2[1].display();

    }
  }

}

class Pattern {
  constructor(x, y, fullx, fully) {
    this.x = x
    this.y = y
    this.fullx = fullx
    this.fully = fully
    this.point2 = 0
    this.point4 = 0
    this.point6 = 0
    this.point8 = 0
    this.r1 = int(random(0, 10));
    this.r2 = int(random(0, 10));
    this.r3 = int(random(0, 10));
    this.r4 = int(random(0, 10));
  }

  generate() {
    if (this.r1 > 5) {
      this.point2 = 100;
    } else {
      this.point2 = 0;
    }

    if (this.r2 > 5) {
      this.point4 = 100;
    } else {
      this.point4 = 0;
    }

    if (this.r3 > 5) {
      this.point6 = 100;
    } else {
      this.point6 = 0;
    }

    if (this.r4 > 5) {
      this.point8 = 100;
    } else {
      this.point8 = 0;
    }
  }

  display() {
    noStroke();
    beginShape();
      vertex(this.x, this.y);                               
      vertex(this.fullx - 100, this.y + this.point2)       
      vertex(this.fullx, this.y);                           
      vertex(this.fullx - this.point4, this.fully - 100);   
      vertex(this.fullx, this.fully);                       
      vertex(this.fullx - 100, this.fully - this.point6);   
      vertex(this.x, this.fully);                           
      vertex(this.x + this.point8, this.fully - 100);       
      vertex(this.x, this.y);                               
    endShape();
  }
}