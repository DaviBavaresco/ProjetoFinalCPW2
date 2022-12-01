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

