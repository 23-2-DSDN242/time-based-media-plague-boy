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
let myStrokeWeight = 50;
strokeWeight(myStrokeWeight);
if (obj.hours < 18 && obj.minutes<30){
  if (obj.hours < 6){ //Nightsky
    fill(nightsky);
      rect(0,0,960,500);
  } else {
  if (obj.hours < 6 && obj.minutes<15){ // Nightsky - Sunrise
    for(let i=0; i<width; i = i += myStrokeWeight){
      let lerpMAP = map(i, 0, width, 0, obj.hours/24*59);
      let twilightlerp = lerpColor(nightky,risesky,lerpMAP)
      stroke(twilightlerp)
      line(i,0,i,height);
    }
  } else{
    if(obj.hours < 6 && obj.minutes<45){ // Sunrise - Daysky
      for(let i=0; i<width; i = i += myStrokeWeight){
          let lerpMAP = map(i, 0, width, 0, obj.hours/24*59);
          let sunriselerp = lerpColor(risesky,daysky,lerpMAP);
          stroke(sunriselerp);
          line(i,0,i,height);
      } 
  } else{//Daysky
    fill(daysky);
    rect(0,0,960,500);
    }
  } 
  }
} else{
    if(obj.hours > 17){
  if(obj.hours < 19){ // Daysky-Sunset
    for(let i=0; i<width; i = i += myStrokeWeight){
      let lerpMAP = map(i, 0, width, 0, obj.hours/24*59);
      let sundownlerp = lerpColor(daysky,setsky,lerpMAP);
      stroke(sundownlerp);
      line(i,0,i,height);
      }
    } else {
      if(obj.hours < 19 && obj.minutes < 30){; //Sunset-Nightsky
        let lerpMAP = map(i, 0, width, 0, obj.hours/24*59);
        let sunsetlerp = lerpColor(setsky,nightsky,lerpMAP);
        stroke(sunsetlerp);
        line(i,0,i,height);

      } else { //Night Time
        fill(nightsky);
        rect(0,0,960,500);
      }
    }
    }else{
      fill(daysky);
      rect(0,0,960,500);
    }
}
  // for(let i=0; i<width; i = i += myStrokeWeight){
  //   let lerpMAP = map(i, 0, width, 0, obj.seconds/59*5);
  //   let sunriselerp = lerpColor(risesky,daysky,lerpMAP)
  //   stroke(sunriselerp)
  //   line(i,0,i,height);
  // }

//Clouds
let cloudX = -obj.seconds*18;
//0
//-18
//-36
//-72
//-90
//-108
//-126
//-144
//-162
//-180
//-198
//-216
let cloudY = 250;
push();
  fill(255);
  ellipse(cloudX, cloudY, 100, 80); //First Cloud
  ellipse(cloudX+50, cloudY+10, 80, 60);
  ellipse(cloudX-50, cloudY+15, 60, 40);
    ellipse(cloudX+200, cloudY+200, 70, 40);//Second Cloud
    ellipse(cloudX+230, cloudY+205, 50, 30);
    ellipse(cloudX+170, cloudY+210, 40, 20);
  ellipse(cloudX+400, cloudY-140, 170, 140); //Third Cloud
  ellipse(cloudX+320, cloudY-115, 100, 80);
  ellipse(cloudX+480, cloudY-120, 130, 90);
    ellipse(cloudX+550, cloudY+80, 100, 80);//Fourth Cloud
    ellipse(cloudX+510, cloudY+90, 80, 60);
    ellipse(cloudX+600, cloudY+95, 70, 50);
  ellipse(cloudX+800, cloudY-60, 90, 70);//Fifth Cloud
  ellipse(cloudX+840, cloudY-50, 70, 50);
  ellipse(cloudX+760, cloudY-40, 50, 30);
    ellipse(cloudX+930, cloudY+150, 150, 130);//Sixth Cloud
    ellipse(cloudX+850, cloudY+160, 120, 100);
    ellipse(cloudX+1000, cloudY+180, 80, 60);
  ellipse(cloudX+1062, cloudY, 100, 80); //First Cloud loop
  ellipse(cloudX+1112, cloudY+10, 80, 60);
  ellipse(cloudX+1012, cloudY+15, 60, 40);
    ellipse(cloudX+1262, cloudY+200, 70, 40);//Second Cloud loop
    ellipse(cloudX+1292, cloudY+205, 50, 30);
    ellipse(cloudX+1232, cloudY+210, 40, 20);
  ellipse(cloudX+1462, cloudY-140, 170, 140); //Third Cloud loop
  ellipse(cloudX+1382, cloudY-115, 100, 80);
  ellipse(cloudX+1542, cloudY-120, 130, 90);
  ellipse(cloudX+1612, cloudY+80, 100, 80);//Fourth Cloud loop
    ellipse(cloudX+1572, cloudY+90, 80, 60);
    ellipse(cloudX+1662, cloudY+95, 70, 50);

  ellipse(cloudX+1862, cloudY-60, 90, 70);//Fifth Cloud loop
  ellipse(cloudX+1902, cloudY-50, 70, 50);
  ellipse(cloudX+1822, cloudY-40, 50, 30);
    ellipse(cloudX+1992, cloudY+150, 150, 130);//Sixth Cloud loop
    ellipse(cloudX+1912, cloudY+160, 120, 100);
    ellipse(cloudX+2062, cloudY+180, 80, 60);
pop();


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

//Silly little plane, doing silly little plane things
let planex = obj.hours*85
let planey = 300
push();
  //Plane Body
    fill(0);
    rect(planex-610, planey, 150, 40, 60,60,20,20);
 //Plane tail
    rect(planex-610, planey-20, 25, 50, 60,60,20,20);
  //Plane Wing, Left
  beginShape();
    vertex(planex-510,planey);
    vertex(planex-560, planey-50);
    vertex(planex-595, planey-40);
    vertex(planex-560, planey);
  endShape();
  //Plane Wing, Right 
  beginShape();
    vertex(planex-540,planey+20);
    vertex(planex-580,planey+70);
    vertex(planex-545,planey+80);
    vertex(planex-500,planey+40);
  endShape();
pop();

}

