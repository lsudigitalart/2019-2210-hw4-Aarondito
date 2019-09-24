var ballX = 200;
var ballY = 200;
var pballX;
var pballY;
var r1 = 20;
var BallR = 50;
var ballVX = 0;
var ballVY = 0;
var Bspeed = 400;
var pad1 = 400;
var pad2 = 400;
var pad1Vel = 0;
var pad2Vel = 0;
var speed = 22;
var velMulti = 0.75;
var p1points = 0;
var p2points = 0;
function setup() { 
  createCanvas(1500, 725);
	noStroke();
	textAlign(CENTER);
	textSize(400);
	angleMode(DEGREES);
  rectMode(CENTER);
	 ballVX = random(15,5);
 ballVY = random(15,10);
  textSize(100);
  
} 

function draw() { 
 			background(0,0,160);
			 fill(255,255,102);
			line(width/2,0,width/2,height);
	
	
	
		
		paddles();
		bounce();
		fill(255,0,0); //score
		text(p1points,500,100);
  	text(p2points,1000,100);
		


	
	
  
  
	if(dist(mouseX,mouseY,ballX,ballY) <= (r1 + BallR)/2 + 1) {
	
	ballX = mouseX + (ballX-mouseX)*(r1+BallR)/dist(mouseX,mouseY,ballX,ballY);
	ballY = mouseY + (ballY-mouseY)*(r1+BallR)/dist(mouseX,mouseY,ballX,ballY);
	ballVX = (ballX - mouseX) / 1;
	ballVY = (ballY - mouseY) / 1;	
 	
	}	
	
	
	ballX = ballX + ballVX;
	ballY = ballY + ballVY;
	fill(255,255,153); //mouse 
	ellipse(mouseX,mouseY,r1);
	fill(60,255,0); //ball
	ellipse(ballX,ballY,BallR);
		
	}
	
	

function paddles() {
	  if(key == 'w') {
    	pad1Vel -= speed;  
    } else
    if(key == 'z') {
    	pad1Vel += speed;  
    }
		
		pad1Vel *= velMulti;
		pad1 += pad1Vel;
		if(pad1 > 750) {
    	pad1 = 750;  
    } else if(pad1 < 50) {
    	pad1 = 50;  
    }
		
	rect(50,pad1,20,300);
		
  
  if(keyIsDown(UP_ARROW)) {
    	pad2Vel -= speed;  
    } else
    if(keyIsDown(DOWN_ARROW)) {
    	pad2Vel += speed;  
    }
		
		pad2Vel *= velMulti;
		pad2 += pad2Vel;
		if(pad2 > 750) {
    	pad2 = 750;  
    } else if(pad2 < 50) {
    	pad2 = 50;  
    }
		
	
rect(1450,pad2,20,200);

}


function getClosest() {
	  if(dist(ballX,ballY,pad1,30) < dist(ballX,ballY,pad2,770)) {
    	return(1);  
    } else {
    	return(2);  
    }
}


function bounce() {
  	if(ballX<61 + BallR / 2 && dist(ballX,ballY,61,pad1) < 55) {
			ballVX = -ballVX;
	} else
  if(ballX<0 + BallR /2) {

  		die(1);
  }

  if(ballX>width - 61 - BallR / 2 && dist(ballX,ballY,width - 61,pad2) < 55) {
			ballVX = -ballVX;
	} else
  if(ballX>width - BallR /2) {

  		die(2);
  }
    
  if(ballY<0 + BallR / 2 || ballY>height - BallR / 2) {
			ballVY = -ballVY;	
	}
}


function die(d) {
	if(d == 1) {
  	p2points += 1;  
  } else if(d == 2) {
  	p1points += 1;  
  }
  ballX = 400;
  ballY = 400;
   if(random(1,2) == 1) {
     ballVX = -5 -(abs(p1points - p2points));
   } else {
     ballVX = 5 +(abs(p1points - p2points));
   }

  
 ballVY = random(2,4);
}
