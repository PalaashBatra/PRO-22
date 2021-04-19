var starImg,bgImg;
var star, starBody;
var fairy,fairyimg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyimg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png")
	fairyVoice = loadSound("sound/JoyMusic.mp3")
}

function setup() {
	createCanvas(600, 600);

	fairyVoice.play()

	fairy = createSprite(400,300,20,20);
	fairy.addAnimation("fairy",fairyimg);
	fairy.scale = 0.1

	star = createSprite(450,30);
	star.addImage("star",starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(450 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y > 300 && starBody.position.y > 300){
	  Matter.Body.setStatic(starBody,true);
  }
  text(mouseX+","+mouseY,10,45)
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if (keyCode === LEFT_ARROW) {
		fairy.x = fairy.x - 10 
	}

	if (keyCode === RIGHT_ARROW) {
		fairy.x = fairy.x + 10 
	}
	
}
