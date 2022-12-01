var stage= document.getElementById("stage");
var ctx= stage.getContext("2d"); 

//padre
var padre = new Image();
//fundo
var bg = new Image();
//chão
var fg = new Image();
//cano superior
var pipeNorth = new Image();
//cano de baixo
var pipeSouth = new Image();


//informo aonde estão as imagens
padre.src = "IMG/padre.png";
bg.src = "IMG/bg.png";
fg.src = "IMG/fg.png";
pipeNorth.src = "IMG/pipeNorth.png";
pipeSouth.src = "IMG/pipeSouth.png";

// começo a criar as ações do jogo
// altura entre canos
var gap = 85; 
var constant ;
//posição do padre
var bX = 10;
var bY = 150;

//gravidade
var gravity = 2.0;
var gravity_backup = gravity;

//variavel dos pontos
var score = 0;

// crio os sons

var fly = new Audio();
var scor = new Audio();




document.addEventListener("keydown",moveUp);

function moveUp(){
    // quando for clicado a gravidade vai ser igual na nasa, inversa    
    gravity = -6.0;
    fly.play();

    setTimeout(function() {
        gravity = gravity_backup;
        
    },80);
};

function draw(){
    //desenho a primeira imagem e informo aonde ela vai ficar, x=0 y=0
    ctx.drawImage(bg,0,0);
    //desenhor o chão, para criar a variavel y, pego a altura total do fundo, e diminuo pelo tamanho do chão, então o chão vai ficar perfeitamente grudado no chão e não vai roubar parte do desenho
    ctx.drawImage(fg,0,stage.height-fg.height);

    var pd = ctx.drawImage(padre,bX,bY);

    // para que o padre continue caindo, ele começa no y 150, se não ouvesse está variavel ele iria se manter no 150, mas com ela, ele fica no 150, depois 152 para sempre se movimenta
    bY +=gravity;

    console.log(bY)
    requestAnimationFrame(draw);
};

window.onload = function(){
    draw();
};


