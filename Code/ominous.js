let osc01, osc02, osc03, sub
let vol = 1;

let soundButtonOn = false;
let soundButtonOff = true;

function setup() {
    cnvButton = createCanvas(windowWidth,windowHeight);

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

    // cnvButton.mousePressed(soundFunction);

    soundButtonOn = createImg('Volume Master.png', 'volume on');
    soundButtonOn.position(width-120,height-60);
    soundButtonOn.mousePressed(soundFunction);
    soundButtonOn.style('width:60px;')
}

function draw(){
    osc01.amp(vol);
    osc02.amp(vol);
    osc03.amp(vol);
    sub.amp(vol);

    if (soundButtonOn == true){
        vol = 0;
    } else {
        vol = 1; 
    }
}

function soundFunction(){
    soundButtonOn = !soundButtonOn;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function touchStarted() {
    getAudioContext().resume()
}