var canvas;
var music;
var tile1,tile2,tile3,til4;
var ball;
var edge;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
  edge =  createEdgeSprites()
    //create 4 different surfaces
tile1=createSprite(90,550,190,30)
tile2=createSprite(300,550,190,30)
tile3=createSprite(510,550,190,30)
tile4=createSprite(720,550,190,30)
    //create box sprite and give velocity
ball=createSprite(random(100,750),545,20,20)
ball.shapeColor=("green")
ball.velocityY=4
ball.velocityX=5

tile1.shapeColor=("red")
tile2.shapeColor=("blue")
tile3.shapeColor=("yellow")
tile4.shapeColor=("orange")
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
ball.bounceOff(edge)
   // ball.bounceOff(tile1)
   // ball.bounceOff(tile2)
   // ball.bounceOff(tile3)
   // ball.bounceOff(tile4)


    if(tile1.isTouching(ball)&& ball.bounceOff(tile1)){
console.log("hi")
ball.shapeColor=("red")   
music.play()   
        }

        if(tile2.isTouching(ball)&& ball.bounceOff(tile2)){
          
     ball.shapeColor=("blue")
     ball.velocityX=0
     ball.velocityY=0
     music.stop()
                    }


                    if(tile3.isTouching(ball)&& ball.bounceOff(tile3)){
                        music.play()   
                       
                                ball.shapeColor=("yellow")
                                }
                                if(tile4.isTouching(ball)&& ball.bounceOff(tile4)){
                                    
                                    music.play()   
     
                                            ball.shapeColor=("orange")
                                            }



                                                      
drawSprites()

    //add condition to check if box touching surface and make it box
}
