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

function draw(){
    ctx.drawImage(bg,0,0);
};


