/*
 * use p5.js to draw a clock on a 960x500 canvas
 */
function draw_clock(obj) {
  // draw your own clock here based on the values of obj:
  //    obj.hours goes from 0-23
  //    obj.minutes goes from 0-59
  //    obj.seconds goes from 0-59
  //    obj.millis goes from 0-999
  //    obj.seconds_until_alarm is:
  //        < 0 if no alarm is set
  //        = 0 if the alarm is currently going off
  //        > 0 --> the number of seconds until alarm should go off
  background(50); //  beige
  // fill(200); // dark grey
  let risesky = color(255, 141, 68);
  let daysky = color(89, 185, 255);
  let setsky = color(60, 3, 87);
  let nightsky = color (1, 8, 64);
  let sunriselerp = lerpColor(risesky,daysky,obj.seconds/59)
  // let sunrise = lerpColor(risesky, daysky, amt);
  // let sunset = lerpColor(daysky, setsky, amt );
  // let nighttime = lerpColor(setsky, nightsky, amt );
  //let twilight = lerpColor (nightsky, risesky,amt);

  // textSize(40);
  // textAlign(CENTER, CENTER);
  // text("YOUR MAIN CLOCK CODE GOES HERE", width / 2, 200);
  
//sky
// Twilight runs from 6:00 to 6:15
// Sunrise runs from 6:15 to 7:00
// Daylight runs from 7:00 to 18:00
// Sunset runs from 18:00 to 18:45
// Set to Night runs from 18:45 to 19:00
// Night runs from 19:00 to 6:00
fill(sunriselerp)
rect(0,0,960,500)

//clocks
let clockx = 40; //X cord for the clock
let clocky = 40; //Y cord for the clock
let clockw = 90; //Width of the clock
let clockh = 100; //Height of the clock
let clockcurve = 20; //Curve of the clock
//Hour
  fill(0);
  rect(clockx,clocky,clockw,clockh,clockcurve);
  rect(clockx + 95,clocky,clockw,clockh,clockcurve);

//Minute
  rect(clockx + 348,clocky,clockw,clockh,clockcurve);
  rect(clockx + 443,clocky,clockw,clockh,clockcurve);

//Second
  rect(clockx + 691,clocky,clockw,clockh,clockcurve);
  rect(clockx + 786,clocky,clockw,clockh,clockcurve);

// stroke(0);
// line(480, 0, 480, 500);


}
