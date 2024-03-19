// Update this function to draw you own maeda clock on a 960x500 canvas
function draw_clock(obj) {
  // Clock 8
  background(50); //  beige
  fill(255,255,255); // White
  let millis = obj.millis;
  let seconds = obj.seconds;
  let tickup = (50);
  let secondsWithFraction   = seconds*7 + (millis / 10.0);
  let secondsSmooth  = map(secondsWithFraction, 0, 300, 0, 300);
  let secondsWithFraction2   = seconds*7 + (millis / 10.0);
  let secondsSmooth2  = map(secondsWithFraction2, 0, 300, 0, 300);
  if (obj.millis > 500){
    push()
    textSize(secondsSmooth);
    textAlign(CENTER, CENTER);
    text(obj.hours, 250, height/2);
  pop()
  } else {
    push()
    textSize(30);
    textAlign(CENTER, CENTER);
    text(obj.hours, 250, height/2);
  pop()
  }

  if (obj.millis < 500){
    push()
    textSize(secondsSmooth2);
    textAlign(CENTER, CENTER);
    text(obj.minutes, 700, height/2);
  pop()
  } else {
    push()
    textSize(30);
    textAlign(CENTER, CENTER);
    text(obj.minutes, 700, height/2);
  pop()
  }


}
