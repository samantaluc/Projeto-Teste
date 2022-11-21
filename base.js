var bola, bolapulando;
var chao, chaoIMG;
var chaoInv;

function preload(){
    chaoIMG = loadImage("chao.png");
    bolapulando = loadAnimation("bola.png","bola1.png","bola2.png");

}

function setup(){
    createCanvas(400, 400);
    bola = createSprite(0, 0, 20,20);
    bola.addAnimation("pulando", bolapulando);
    bola.x = 50;
    bola.scale = 1;
    chao = createSprite(0, 350, 500,6);
    chao.scale = 0.2;
    chao.addImage(chaoIMG);
    chao.x = 0;
    chao.velocityX = -5;
    chaoInv = createSprite(0,370,500,6);
    chaoInv.visible = false;
}

function draw(){
    background(0);
    chao.depth = bola.depth - 1;
    bola.velocityY = bola.velocityY + 0.8;
    bola.collide(chaoInv);
    if (keyDown("space") && bola.y > 100){
        bola.velocityY = -10;
    }

    if (chao.x < 0) {
        chao.x = chao.width / 2;
      }
    drawSprites();
}
