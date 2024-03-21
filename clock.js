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
  let hours = obj.hours;
  let minutes = obj.minutes;
  let seconds = obj.seconds;
  let millis = obj.millis;
//Sky
//Between 7pm(19:00) and 6am(6:00) Sky is Night
//Between 6am(6:00) and 6.30am (6:30) Sky is Twilight - NightSky to RiseSky
//Between 6.30am(6:30) and 7am(7:00) Sky is Sunrise - Risesky to Daysky
//Between 7am(7:00) and 6pm(18:00) Sky is Daylight 
//Between 6pm(18:00) and 6.30pm(18:30) Sky is Pre-Sunset - Daysky to Setsky
//Between 6.30pm(18:30) and 7pm (19:00) Sky is Sunset - Setsky to Nightsky
let risesky = color(255, 141, 68); //Orange
let daysky = color(89, 185, 255); //Light Blue
let setsky = color(60, 3, 87); //Purple 
let nightsky = color (1, 8, 64); //Navy

let myStrokeWeight = 50;
strokeWeight(myStrokeWeight);
let AmmountAccross = map(obj.minutes, 0, 29, 0, width) //For First half of the hour transitions
let AmmountAccross2 = map(obj.minutes, 30, 60, 0, width) //For Second half of the hour transitions

if(obj.hours >= 19 || obj.hours < 6){ //Default Skies
  fill(nightsky); //Between 7pm(19:00) and 6am(6:00) Sky is Night
  rect(0,0,960,500);
}else{
  fill(daysky); //Between 7am(7:00) and 6pm(18:00) Sky is Daylight
  rect(0,0,960,500);
}

if (obj.hours == 6 && obj.minutes <30 ) { //Between 6am(6:00) and 6.30am (6:30) Sky is Twilight - NightSky to RiseSky
  fill(nightsky);
  rect(0,0,960,500);
  for(let i=0; i<AmmountAccross; i = i += myStrokeWeight){
    let lerpMAP = map(AmmountAccross, 0, width, 0, 1);
    let twilightlerp = lerpColor(nightsky,risesky,lerpMAP)
    stroke(twilightlerp)
    line(i,0,i,height);
  }
}

if (obj.hours == 6 && obj.minutes >= 30 ) { //Between 6.30am(6:30) and 7am(7:00) Sky is Sunrise - Risesky to Daysky
  fill(risesky);
  rect(0,0,960,500); 
  for(let i=0; i<AmmountAccross2; i = i += myStrokeWeight){
    let lerpMAPPAIN = map(AmmountAccross2, 0, width, 0, 1);
    let sunriselerp = lerpColor(risesky,daysky,lerpMAPPAIN)
    stroke(sunriselerp)
    line(i,0,i,height);
  }
}

if(obj.hours == 18 && obj.minutes <31 ){ //Between 6pm(18:00) and 6.30pm(18:30) Sky is Pre-Sunset - Daysky to Setsky
  for(let i=0; i<AmmountAccross; i = i += myStrokeWeight){
    let lerpMAP = map(AmmountAccross, 0, width, 0, 1);
    let setstartlerp = lerpColor(daysky,setsky,lerpMAP)
    stroke(setstartlerp)
    line(i,0,i,height);
}
}

if(obj.hours == 18 && obj.minutes >= 30 ){ //Between 6.30pm(18:30) and 7pm (19:00) Sky is Sunset - Setsky to Nightsky
  fill(setsky);
  rect(0,0,960,500); 
  for(let i=0; i<AmmountAccross2; i = i += myStrokeWeight){
    let lerpMAP = map(AmmountAccross2, 0, width, 0, 1);
    let sunsetlerp = lerpColor(setsky,nightsky,lerpMAP)
    stroke(sunsetlerp)
    line(i,0,i,height);
}
}


//Clouds, Plane & Alarm

let secondsWithFraction   = seconds + (millis / 1000.0);
let secondsCloudSmooth  = map(secondsWithFraction, 0, 59, 0, width);

let cloudX = -secondsCloudSmooth; // X co-ordinate for the clouds that changes with seconds
let cloudY = 250; //Y Co-ordinate for the clouds
let cloudcolour = color(255) //'Normal' cloud colour
let cloudcolourD = color(59, 33, 33); //Gray-Red Clouds for 'DoomsDay'
if (obj.seconds_until_alarm < 0 || obj.seconds_until_alarm == undefined){ //No Alarm is set Behaviour
  //Normal Cloud Behaviour and Plane
  //Clouds
  push(); 
  noStroke();
  fill(cloudcolour);
  ellipse(cloudX+20, cloudY, 100, 80); //First Cloud
  ellipse(cloudX+70, cloudY+10, 80, 60);
  ellipse(cloudX-30, cloudY+15, 60, 40);
    ellipse(cloudX+203, cloudY+200, 70, 40);//Second Cloud
    ellipse(cloudX+233, cloudY+205, 50, 30);
    ellipse(cloudX+173, cloudY+210, 40, 20);
  ellipse(cloudX+403, cloudY-140, 170, 140); //Third Cloud
  ellipse(cloudX+323, cloudY-115, 100, 80);
  ellipse(cloudX+483, cloudY-120, 130, 90);
    ellipse(cloudX+553, cloudY+80, 100, 80);//Fourth Cloud
    ellipse(cloudX+513, cloudY+90, 80, 60);
    ellipse(cloudX+603, cloudY+95, 70, 50);
  ellipse(cloudX+803, cloudY-60, 90, 70);//Fifth Cloud
  ellipse(cloudX+843, cloudY-50, 70, 50);
  ellipse(cloudX+763, cloudY-40, 50, 30);
    ellipse(cloudX+933, cloudY+150, 150, 130);//Sixth Cloud
    ellipse(cloudX+853, cloudY+160, 120, 100);
    ellipse(cloudX+1003, cloudY+180, 80, 60);

  ellipse(cloudX+1000, cloudY, 100, 80); //First Cloud loop
  ellipse(cloudX+1050, cloudY+10, 80, 60);
  ellipse(cloudX+950, cloudY+15, 60, 40);
    ellipse(cloudX+1180, cloudY+200, 70, 40);//Second Cloud loop
    ellipse(cloudX+1210, cloudY+205, 50, 30);
    ellipse(cloudX+1150, cloudY+210, 40, 20);
  ellipse(cloudX+1380, cloudY-140, 170, 140); //Third Cloud loop
  ellipse(cloudX+1300, cloudY-115, 100, 80);
  ellipse(cloudX+1460, cloudY-120, 130, 90);
    ellipse(cloudX+1530, cloudY+80, 100, 80);//Fourth Cloud loop
    ellipse(cloudX+1490, cloudY+90, 80, 60);
    ellipse(cloudX+1580, cloudY+95, 70, 50);
  ellipse(cloudX+1780, cloudY-60, 90, 70);//Fifth Cloud loop
  ellipse(cloudX+1820, cloudY-50, 70, 50);
  ellipse(cloudX+1740, cloudY-40, 50, 30);
    ellipse(cloudX+1910, cloudY+150, 150, 130);//Sixth Cloud loop
    ellipse(cloudX+1830, cloudY+160, 120, 100);
    ellipse(cloudX+1980, cloudY+180, 80, 60);

  ellipse(cloudX+1977, cloudY, 100, 80); //First Cloud FIN LOOP
  ellipse(cloudX+2027, cloudY+10, 80, 60);
  ellipse(cloudX+1927, cloudY+15, 60, 40);

  ellipse(cloudX-44, cloudY+150, 150, 130);//Sixth Cloud FIN loop
  ellipse(cloudX-124, cloudY+160, 120, 100);
  ellipse(cloudX+26, cloudY+180, 80, 60);
pop();
//Plane
let hoursWithFractionPl   = hours*80 + (minutes);
let hoursPlaneSmooth  = map(hoursWithFractionPl, 0, 960, 0, width);

let planex = hoursPlaneSmooth - 620
let planey = 300
push();
  //Plane Body
    fill(0);
    noStroke();
    rect(planex, planey, 150, 40, 60,60,20,20);
 //Plane tail
    rect(planex, planey-20, 25, 50, 60,60,20,20);
  //Plane Wing, Left
  beginShape();
    vertex(planex+100,planey);
    vertex(planex+50, planey-50);
    vertex(planex+15, planey-40);
    vertex(planex+50, planey);
  endShape();
  //Plane Wing, Right 
  beginShape();
    vertex(planex+70,planey+20);
    vertex(planex+30,planey+70);
    vertex(planex+65,planey+80);
    vertex(planex+110,planey+40);
  endShape();
pop();

} else if (obj.seconds_until_alarm > 0) { //Alarm is ticking down.
  if(obj.millis < 999/2){ //Cloud Hopping Function
    let cloudY = 225 //Cloud Down 
push();
  noStroke();
  fill(cloudcolour);
  ellipse(cloudX+20, cloudY, 100, 80); //First Cloud
  ellipse(cloudX+70, cloudY+10, 80, 60);
  ellipse(cloudX-30, cloudY+15, 60, 40);
    ellipse(cloudX+203, cloudY+200, 70, 40);//Second Cloud
    ellipse(cloudX+233, cloudY+205, 50, 30);
    ellipse(cloudX+173, cloudY+210, 40, 20);
  ellipse(cloudX+403, cloudY-140, 170, 140); //Third Cloud
  ellipse(cloudX+323, cloudY-115, 100, 80);
  ellipse(cloudX+483, cloudY-120, 130, 90);
    ellipse(cloudX+553, cloudY+80, 100, 80);//Fourth Cloud
    ellipse(cloudX+513, cloudY+90, 80, 60);
    ellipse(cloudX+603, cloudY+95, 70, 50);
  ellipse(cloudX+803, cloudY-60, 90, 70);//Fifth Cloud
  ellipse(cloudX+843, cloudY-50, 70, 50);
  ellipse(cloudX+763, cloudY-40, 50, 30);
    ellipse(cloudX+933, cloudY+150, 150, 130);//Sixth Cloud
    ellipse(cloudX+853, cloudY+160, 120, 100);
    ellipse(cloudX+1003, cloudY+180, 80, 60);

  ellipse(cloudX+1000, cloudY, 100, 80); //First Cloud loop
  ellipse(cloudX+1050, cloudY+10, 80, 60);
  ellipse(cloudX+950, cloudY+15, 60, 40);
    ellipse(cloudX+1180, cloudY+200, 70, 40);//Second Cloud loop
    ellipse(cloudX+1210, cloudY+205, 50, 30);
    ellipse(cloudX+1150, cloudY+210, 40, 20);
  ellipse(cloudX+1380, cloudY-140, 170, 140); //Third Cloud loop
  ellipse(cloudX+1300, cloudY-115, 100, 80);
  ellipse(cloudX+1460, cloudY-120, 130, 90);
    ellipse(cloudX+1530, cloudY+80, 100, 80);//Fourth Cloud loop
    ellipse(cloudX+1490, cloudY+90, 80, 60);
    ellipse(cloudX+1580, cloudY+95, 70, 50);
  ellipse(cloudX+1780, cloudY-60, 90, 70);//Fifth Cloud loop
  ellipse(cloudX+1820, cloudY-50, 70, 50);
  ellipse(cloudX+1740, cloudY-40, 50, 30);
    ellipse(cloudX+1910, cloudY+150, 150, 130);//Sixth Cloud loop
    ellipse(cloudX+1830, cloudY+160, 120, 100);
    ellipse(cloudX+1980, cloudY+180, 80, 60);

  ellipse(cloudX+1977, cloudY, 100, 80); //First Cloud FIN LOOP
  ellipse(cloudX+2027, cloudY+10, 80, 60);
  ellipse(cloudX+1927, cloudY+15, 60, 40);

  ellipse(cloudX-44, cloudY+150, 150, 130);//Sixth Cloud FIN loop
  ellipse(cloudX-124, cloudY+160, 120, 100);
  ellipse(cloudX+26, cloudY+180, 80, 60);
pop();
//Plane, Normal
let hoursWithFractionPl   = hours*80 + (minutes);
let hoursPlaneSmooth  = map(hoursWithFractionPl, 0, 960, 0, width);

let planex = hoursPlaneSmooth - 620
let planey = 300
push();
  //Plane Body
    fill(0);
    noStroke();
    rect(planex, planey, 150, 40, 60,60,20,20);
 //Plane tail
    rect(planex, planey-20, 25, 50, 60,60,20,20);
  //Plane Wing, Left
  beginShape();
    vertex(planex+100,planey);
    vertex(planex+50, planey-50);
    vertex(planex+15, planey-40);
    vertex(planex+50, planey);
  endShape();
  //Plane Wing, Right 
  beginShape();
    vertex(planex+70,planey+20);
    vertex(planex+30,planey+70);
    vertex(planex+65,planey+80);
    vertex(planex+110,planey+40);
  endShape();
pop();
    }
    else{
      //Cloud Goes up a Little
  let cloudY = 250
  push();
  noStroke();
  fill(cloudcolour);
  ellipse(cloudX+20, cloudY, 100, 80); //First Cloud
  ellipse(cloudX+70, cloudY+10, 80, 60);
  ellipse(cloudX-30, cloudY+15, 60, 40);
    ellipse(cloudX+203, cloudY+200, 70, 40);//Second Cloud
    ellipse(cloudX+233, cloudY+205, 50, 30);
    ellipse(cloudX+173, cloudY+210, 40, 20);
  ellipse(cloudX+403, cloudY-140, 170, 140); //Third Cloud
  ellipse(cloudX+323, cloudY-115, 100, 80);
  ellipse(cloudX+483, cloudY-120, 130, 90);
    ellipse(cloudX+553, cloudY+80, 100, 80);//Fourth Cloud
    ellipse(cloudX+513, cloudY+90, 80, 60);
    ellipse(cloudX+603, cloudY+95, 70, 50);
  ellipse(cloudX+803, cloudY-60, 90, 70);//Fifth Cloud
  ellipse(cloudX+843, cloudY-50, 70, 50);
  ellipse(cloudX+763, cloudY-40, 50, 30);
    ellipse(cloudX+933, cloudY+150, 150, 130);//Sixth Cloud
    ellipse(cloudX+853, cloudY+160, 120, 100);
    ellipse(cloudX+1003, cloudY+180, 80, 60);

  ellipse(cloudX+1000, cloudY, 100, 80); //First Cloud loop
  ellipse(cloudX+1050, cloudY+10, 80, 60);
  ellipse(cloudX+950, cloudY+15, 60, 40);
    ellipse(cloudX+1180, cloudY+200, 70, 40);//Second Cloud loop
    ellipse(cloudX+1210, cloudY+205, 50, 30);
    ellipse(cloudX+1150, cloudY+210, 40, 20);
  ellipse(cloudX+1380, cloudY-140, 170, 140); //Third Cloud loop
  ellipse(cloudX+1300, cloudY-115, 100, 80);
  ellipse(cloudX+1460, cloudY-120, 130, 90);
    ellipse(cloudX+1530, cloudY+80, 100, 80);//Fourth Cloud loop
    ellipse(cloudX+1490, cloudY+90, 80, 60);
    ellipse(cloudX+1580, cloudY+95, 70, 50);
  ellipse(cloudX+1780, cloudY-60, 90, 70);//Fifth Cloud loop
  ellipse(cloudX+1820, cloudY-50, 70, 50);
  ellipse(cloudX+1740, cloudY-40, 50, 30);
    ellipse(cloudX+1910, cloudY+150, 150, 130);//Sixth Cloud loop
    ellipse(cloudX+1830, cloudY+160, 120, 100);
    ellipse(cloudX+1980, cloudY+180, 80, 60);

  ellipse(cloudX+1977, cloudY, 100, 80); //First Cloud FIN LOOP
  ellipse(cloudX+2027, cloudY+10, 80, 60);
  ellipse(cloudX+1927, cloudY+15, 60, 40);

  ellipse(cloudX-44, cloudY+150, 150, 130);//Sixth Cloud FIN loop
  ellipse(cloudX-124, cloudY+160, 120, 100);
  ellipse(cloudX+26, cloudY+180, 80, 60);
pop();
//Plane, Normal
let hoursWithFractionPl   = hours*80 + (minutes);
let hoursPlaneSmooth  = map(hoursWithFractionPl, 0, 960, 0, width);

let planex = hoursPlaneSmooth - 620
let planey = 300
push();
  //Plane Body
    fill(0);
    noStroke();
    rect(planex, planey, 150, 40, 60,60,20,20);
 //Plane tail
    rect(planex, planey-20, 25, 50, 60,60,20,20);
  //Plane Wing, Left
  beginShape();
    vertex(planex+100,planey);
    vertex(planex+50, planey-50);
    vertex(planex+15, planey-40);
    vertex(planex+50, planey);
  endShape();
  //Plane Wing, Right 
  beginShape();
    vertex(planex+70,planey+20);
    vertex(planex+30,planey+70);
    vertex(planex+65,planey+80);
    vertex(planex+110,planey+40);
  endShape();
pop();
    }
} else { // Alarm is going off
let LiteRed = color(255, 0, 0); //Sky colour changes to red gradient effect
let DarkRed = color(125, 0, 0);
for(let i=0; i<=height; i += myStrokeWeight){
  let lerpMAP = map(i, 0, height, 0, 1);
  let doomsday = lerpColor(LiteRed,DarkRed,lerpMAP)
  stroke(doomsday)
  line(0,i,width,i);
}
  push(); //Normal Cloud Behaviour
  noStroke();
  fill(cloudcolourD);
  ellipse(cloudX+20, cloudY, 100, 80); //First Cloud
  ellipse(cloudX+70, cloudY+10, 80, 60);
  ellipse(cloudX-30, cloudY+15, 60, 40);
    ellipse(cloudX+203, cloudY+200, 70, 40);//Second Cloud
    ellipse(cloudX+233, cloudY+205, 50, 30);
    ellipse(cloudX+173, cloudY+210, 40, 20);
  ellipse(cloudX+403, cloudY-140, 170, 140); //Third Cloud
  ellipse(cloudX+323, cloudY-115, 100, 80);
  ellipse(cloudX+483, cloudY-120, 130, 90);
    ellipse(cloudX+553, cloudY+80, 100, 80);//Fourth Cloud
    ellipse(cloudX+513, cloudY+90, 80, 60);
    ellipse(cloudX+603, cloudY+95, 70, 50);
  ellipse(cloudX+803, cloudY-60, 90, 70);//Fifth Cloud
  ellipse(cloudX+843, cloudY-50, 70, 50);
  ellipse(cloudX+763, cloudY-40, 50, 30);
    ellipse(cloudX+933, cloudY+150, 150, 130);//Sixth Cloud
    ellipse(cloudX+853, cloudY+160, 120, 100);
    ellipse(cloudX+1003, cloudY+180, 80, 60);

  ellipse(cloudX+1000, cloudY, 100, 80); //First Cloud loop
  ellipse(cloudX+1050, cloudY+10, 80, 60);
  ellipse(cloudX+950, cloudY+15, 60, 40);
    ellipse(cloudX+1180, cloudY+200, 70, 40);//Second Cloud loop
    ellipse(cloudX+1210, cloudY+205, 50, 30);
    ellipse(cloudX+1150, cloudY+210, 40, 20);
  ellipse(cloudX+1380, cloudY-140, 170, 140); //Third Cloud loop
  ellipse(cloudX+1300, cloudY-115, 100, 80);
  ellipse(cloudX+1460, cloudY-120, 130, 90);
    ellipse(cloudX+1530, cloudY+80, 100, 80);//Fourth Cloud loop
    ellipse(cloudX+1490, cloudY+90, 80, 60);
    ellipse(cloudX+1580, cloudY+95, 70, 50);
  ellipse(cloudX+1780, cloudY-60, 90, 70);//Fifth Cloud loop
  ellipse(cloudX+1820, cloudY-50, 70, 50);
  ellipse(cloudX+1740, cloudY-40, 50, 30);
    ellipse(cloudX+1910, cloudY+150, 150, 130);//Sixth Cloud loop
    ellipse(cloudX+1830, cloudY+160, 120, 100);
    ellipse(cloudX+1980, cloudY+180, 80, 60);

  ellipse(cloudX+1977, cloudY, 100, 80); //First Cloud FIN LOOP
  ellipse(cloudX+2027, cloudY+10, 80, 60);
  ellipse(cloudX+1927, cloudY+15, 60, 40);

  ellipse(cloudX-44, cloudY+150, 150, 130);//Sixth Cloud FIN loop
  ellipse(cloudX-124, cloudY+160, 120, 100);
  ellipse(cloudX+26, cloudY+180, 80, 60);
pop();
//Silly little plane, Exploding
let hoursWithFractionPl   = hours*80 + (minutes);
let hoursPlaneSmooth  = map(hoursWithFractionPl, 0, 960, 0, width);
let planex = hoursPlaneSmooth - 620
let planey = 300;

push();
  //Plane Body
    fill(0);
    noStroke();
    rect(planex, planey, 150, 40, 60,60,20,20);
 //Plane tail
    rect(planex, planey-20, 25, 50, 60,60,20,20);
  //Plane Wing, Left
  beginShape();
    vertex(planex+100,planey);
    vertex(planex+50, planey-50);
    vertex(planex+15, planey-40);
    vertex(planex+50, planey);
  endShape();
  //Plane Wing, Right 
  beginShape();
    vertex(planex+70,planey+20);
    vertex(planex+30,planey+70);
    vertex(planex+65,planey+80);
    vertex(planex+110,planey+40);
  endShape();
pop();
if(obj.millis < 999/2){ //Explosion Cloud
  let explosion = 100
  fill(156, 156, 156);
  noStroke();
  ellipse(planex+55,planey,explosion,explosion);
  ellipse(planex,planey+20,explosion-50,explosion-50)
  ellipse(planex+110,planey+30,explosion-30,explosion-30)
} else{
  let explosion = 120
  fill(176, 176, 176);
  noStroke();
  ellipse(planex+55,planey,explosion,explosion);
  ellipse(planex,planey+20,explosion-50,explosion-50)
  ellipse(planex+110,planey+30,explosion-30,explosion-30)
}
}

//Clocks
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
  if (obj.hours < 10){ //Displays the digits with a 0 in the front if number is in single digits
    DisplayDigits('0', obj.hours.toString(),clockx + 45 )
   }else{
  let stringyHour = obj.hours.toString()
  DisplayDigits(stringyHour[0], stringyHour[1],clockx + 45)
   }
  
//Minutes
  noStroke();
  fill(0);
  rect(clockx + 348,clocky,clockw,clockh,clockcurve);
  rect(clockx + 443,clocky,clockw,clockh,clockcurve);
  strokeWeight(1)
  textSize(70);
  fill(255)
  textAlign(CENTER, CENTER);
 if (obj.minutes < 10){ //Displays the digits with a 0 in the front if number is in single digits
  DisplayDigits('0', obj.minutes.toString(),clockx + 393 ) 
 }else{
let stringyMin = obj.minutes.toString()
DisplayDigits(stringyMin[0], stringyMin[1],clockx + 393)
 }

//Seconds
  noStroke()
  fill(0);
  rect(clockx + 691,clocky,clockw,clockh,clockcurve);
  rect(clockx + 786,clocky,clockw,clockh,clockcurve);
  strokeWeight(1)
  textSize(70);
  fill(255)
  textAlign(CENTER, CENTER);
  if (obj.seconds < 10){ //Displays the digits with a 0 in the front if number is in single digits
    DisplayDigits('0', obj.seconds.toString(),clockx + 736 )
   }else{
  let stringySec = obj.seconds.toString()
  DisplayDigits(stringySec[0], stringySec[1],clockx + 736)
   }
}


function DisplayDigits (firstD, secondD, Xval){ //PHEOBE HELPED
  strokeWeight(1)
  textSize(70);
  fill(255)
text(firstD,Xval, 95 )
text(secondD,Xval+95, 95 )
}
