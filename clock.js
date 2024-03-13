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
  background(1000); //  beige
  // fill(200); // dark grey
  let risesky = color(255, 141, 68);
  let daysky = color(89, 185, 255);
  let setsky = color(60, 3, 87);
  let nightsky = color (1, 8, 64);
  

//sky
// let myStrokeWeight = 50;
// strokeWeight(myStrokeWeight);
// if (obj.hours < 18 && obj.minutes<30){
//   if (obj.hours < 6){ //Nightsky
//     fill(nightsky);
//       rect(0,0,960,500);
//   } else {
//   if (obj.hours < 6 && obj.minutes<15){ // Nightsky - Sunrise
//     for(let i=0; i<width; i = i += myStrokeWeight){
//       let lerpMAP = map(i, 0, width, 0, obj.hours/24*59);
//       let twilightlerp = lerpColor(nightky,risesky,lerpMAP)
//       stroke(twilightlerp)
//       line(i,0,i,height);
//     }
//   } else{
//     if(obj.hours < 6 && obj.minutes<45){ // Sunrise - Daysky
//       for(let i=0; i<width; i = i += myStrokeWeight){
//           let lerpMAP = map(i, 0, width, 0, obj.hours/24*59);
//           let sunriselerp = lerpColor(risesky,daysky,lerpMAP);
//           stroke(sunriselerp);
//           line(i,0,i,height);
//       } 
//   } else{//Daysky
//     fill(daysky);
//     rect(0,0,960,500);
//     }
//   } 
//   }
// } else{
//     if(obj.hours > 17){
//   if(obj.hours < 19){ // Daysky-Sunset
//     for(let i=0; i<width; i = i += myStrokeWeight){
//       let lerpMAP = map(i, 0, width, 0, obj.hours/24*59);
//       let sundownlerp = lerpColor(daysky,setsky,lerpMAP);
//       stroke(sundownlerp);
//       line(i,0,i,height);
//       }
//     } else {
//       if(obj.hours < 19 && obj.minutes < 30){; //Sunset-Nightsky
//         let lerpMAP = map(i, 0, width, 0, obj.hours/24*59);
//         let sunsetlerp = lerpColor(setsky,nightsky,lerpMAP);
//         stroke(sunsetlerp);
//         line(i,0,i,height);

//       } else { //Night Time
//         fill(nightsky);
//         rect(0,0,960,500);
//       }
//     }
//     }else{
//       fill(daysky);
//       rect(0,0,960,500);
//     }
// }
  // for(let i=0; i<width; i = i += myStrokeWeight){
  //   let lerpMAP = map(i, 0, width, 0, obj.seconds/59*5);
  //   let sunriselerp = lerpColor(risesky,daysky,lerpMAP)
  //   stroke(sunriselerp)
  //   line(i,0,i,height);
  // }

//clocks
let clockx = 40; //X cord for the clock
let clocky = 40; //Y cord for the clock
let clockw = 90; //Width of the clock
let clockh = 100; //Height of the clock
let clockcurve = 20; //Curve of the clock
//Hour
  noStroke()
  fill(0);
  rect(clockx,clocky,clockw,clockh,clockcurve);
  rect(clockx + 95,clocky,clockw,clockh,clockcurve);
  strokeWeight(1)
  textSize(70);
  fill(255)
  textAlign(CENTER, CENTER);
  text(obj.hours, clockx+43, clocky+53);

//Minute
  noStroke();
  fill(0);
  rect(clockx + 348,clocky,clockw,clockh,clockcurve);
  rect(clockx + 443,clocky,clockw,clockh,clockcurve);
  strokeWeight(1)
  textSize(70);
  fill(255)
  textAlign(CENTER, CENTER);
  text(obj.minutes, clockx+393, clocky+53);

//Seconds
  noStroke()
  fill(0);
  rect(clockx + 691,clocky,clockw,clockh,clockcurve);
  rect(clockx + 786,clocky,clockw,clockh,clockcurve);
  strokeWeight(1)
  textSize(70);
  fill(255)
  textAlign(CENTER, CENTER);
  text(obj.seconds, clockx+783, clocky+53);
}

