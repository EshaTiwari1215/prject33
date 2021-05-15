//const Engine = Matter.Engine;
//const World= Matter.World;
//const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var backgroundImg, bg 
var moring
var eveing
var night

function preload() {
  getBackgroundImg();
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0400 && hour<=1200){
      bg = "snow3.jpg";
  }
  else if(hour>= 1300 && hour <=2000){
      bg = "snow1.jpg";
  }
  else{
    bg = "snow2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}