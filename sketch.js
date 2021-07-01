function setup() {
    createCanvas(100, 100);
    vidieo=createCapture(VIDEO)
  }
  
  function draw() {
    image(video,0,0,80,80)
    background(220);
  }