function setup() {
    var myCanvas = createCanvas(800, 250);
    frameRate(8);
    noStroke();
    background(random(255), random(255), random(255));
    myCanvas.parent(mySketch);
  }
  
  function draw() {
    if(mouseIsPressed) {
      fill(random(255), random(255), random(255), random(255));
    } else {
      fill(255, 255, 255, random(255));
    }
    var rectSize = random(200);
    rect(mouseX-(rectSize/2), mouseY-(rectSize/2), rectSize+random(100), rectSize+random(100));
  }