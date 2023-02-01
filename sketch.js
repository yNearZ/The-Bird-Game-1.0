//Criando váriavel 

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var passaro, passaroImg;
var clouds, cloudsGroup, cloudsImg;
var gameOver, gameOverImg;

var bk, backGroundImg;

var score;

function preload(){

//Colocar imagem 

    //Dizendo que bird é passaro.png
    passaroImg = loadImage("passaro.png");
    
    //Dizendo que skyImg é passaro.png
    backGroundImg = loadImage("sky.png");

    //Dizendo que cloudsImg é Nuvem.png
    cloudsImg = loadImage("Nuvem.png");

    //Dizendo que GameOverImg é GameOver.png
    gameOverImg = loadImage("GameOver.png");
}

function setup() {
    createCanvas(800,650);

//Criar os sprites

    //Ajustando tamanho do pássaro
    passaro = createSprite(300,200,50,20);
    passaro.scale = 0.2;
    passaro.addImage("Pássaro", passaroImg);

    //Ajustando o tamanho do GameOver
    gameOver = createSprite(400,325)
    gameOver.addImage("Tela de Fim de Jogo", gameOverImg)
    gameOver.visible = false

    //Setando a colisão
    passaro.setCollider("rectangle",0,0,passaro.width,passaro.height);
    passaro.debug = false

    cloudsGroup = createGroup();

    score = 0;
    
    createEdgeSprites()
}

function draw() { 
    background("#c2e0f6")
    fill("white")
    textSize(20)
    text("Score = "+ score, 500,100);


    if(gameState === PLAY){ 
        score = score + Math.round(frameCount/60);
        
        gameOver.visible = false
    //Ajustando as teclas

    if(keyDown("right")){
        passaro.x = passaro.x +8
}

    if(keyDown("left")){
        passaro.x = passaro.x -8
}
    spawnClouds()

    if(passaro.isTouching(cloudsGroup)||passaro.x > 800|| passaro.x < 0){
        gameState = END
    }
}
    if(gameState === END){
        reset()
    }
        drawSprites();

    }

function reset(){
    gameOver.visible = true

    score = 0
    
    cloudsGroup.destroyEach()
  }


    function spawnClouds() {
//Spawn nuvens 
    if (frameCount % 60 === 0) {
        var cloud = createSprite(600,660,40,10);
            cloud.x = Math.round(random(40,750));
            cloud.addImage(cloudsImg);
            cloud.scale = 0.2;
            cloud.velocityY = -3;
      
//atribuindo tempo de vida à variável 

      cloud.lifetime = 260;
      cloudsGroup.add(cloud);
    }
}
