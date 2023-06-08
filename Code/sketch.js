let pattern = [];    //main pattern array
let grid = 200;       
let swatchSize = 400

//Sound ¬ 
let osc01, osc02, osc03, sub
let vol = 1;


function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  resetSketch();
  cnv.mousePressed(resetSketch);
  rectMode(CENTER)
  noStroke();
  setInterval(generateNew,  1000); //runs every second
  // soundButtonOn = createImg('Code/Volume Master.png', 'volume on');
  // soundButtonOn.position(width-120,height-60);
  // soundButtonOn.mousePressed(soundFunction);
  // soundButtonOn.style('width:60px;')
}

function draw() {
  

//sound ¬ //////////////////////////////////////////////////////////////////////
  osc01.amp(vol);
  osc02.amp(vol);
  osc03.amp(vol);
  sub.amp(vol);
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

function resetSketch(){
  osc01 = new p5.Oscillator('sine');
  osc02 = new p5.Oscillator('sine');
  osc03 = new p5.Oscillator('sine');
  sub = new p5.Oscillator('sine');

  osc01.freq(100);
  osc02.freq(101);
  osc03.freq(200);
  sub.freq(50);

  osc01.start();
  osc02.start();
  osc03.start();
  sub.start();

  RCR1 = int(random(0,255))
  RCG1 = int(random(0,255))
  RCB1 = int(random(0,255))
  
  RCR2 = int(random(0,255))
  RCG2 = int(random(0,255))
  RCB2 = int(random(0,255))

  RCR3 = int(random(0,255))
  RCG3 = int(random(0,255))
  RCB3 = int(random(0,255))
  
  RCR4 = int(random(0,255))
  RCG4 = int(random(0,255))
  RCB4 = int(random(0,255))
}

function soundFunction(){
  //soundButtonOn = !soundButtonOn;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function touchStarted() {
  getAudioContext().resume()
}

function generateNew() {
  background(220);

  //set up for machines ¬ ///////////////////////////////////////////////////////
  colour1 = color(RCR1,RCG1,RCB1,50);
  colour2 = color(RCR2,RCG2,RCB2,50);

  colour3 = color(RCR3,RCG3,RCB3,50);
  colour4 = color(RCR4,RCG4,RCB4,50);
  
  let lerpA = lerpColor(colour1, colour2, 0.33);
  let lerpB = lerpColor(colour1, colour2, 0.66);

  let lerpC = lerpColor(colour3, colour4, 0.33);
  let lerpD = lerpColor(colour4, colour4, 0.66);

  let centreReducer = swatchSize/2;

  let plotter1x = width/2-300;
  let plotter1y = height/2;

  let plotter2x = width/2+300;
  let plotter2y = height/2;

//Machine 01 ¬ ///////////////////////////////////////////////////////////////////////
  fill(lerpB);
  rect(plotter1x, plotter1y, 400, 400);
  
  for (let x2 = 0; x2 < swatchSize; x2 = x2 + grid) {
    for (let y2 = 0; y2 < swatchSize; y2 = y2 + grid) {
      let x = plotter1x - centreReducer + x2;
      let y = plotter1y - centreReducer + y2;
      let fullx = plotter1x + 200 - centreReducer + x2;
      let fully = plotter1y + 200 - centreReducer + y2;
      
      fill(colour1);
      pattern[0] = new Pattern(x, y, fullx, fully);
      pattern[0].generate();
      pattern[0].display();
      
      fill(lerpA);
      pattern[1] = new Pattern(x, y, fullx, fully);
      pattern[1].generate();
      pattern[1].display();
    }
  }

//Machine 02 ¬ //////////////////////////////////////////////////////////////////////
  fill(lerpD);
  rect(plotter2x, plotter2y, 400, 400);

  for (let x2 = 0; x2 < swatchSize; x2 = x2 + grid) {
    for (let y2 = 0; y2 < swatchSize; y2 = y2 + grid) {
      let x = plotter2x - centreReducer + x2;
      let y = plotter2y - centreReducer + y2;
      let fullx = plotter2x + 200 - centreReducer + x2;
      let fully = plotter2y + 200 - centreReducer + y2;
      
      fill(colour3);
      pattern[2] = new Pattern(x, y, fullx, fully);
      pattern[2].generate();
      pattern[2].display();
      
      fill(lerpC);
      pattern[3] = new Pattern(x, y, fullx, fully);
      pattern[3].generate();
      pattern[3].display();
    }
  }
}