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
var gap = 185; 
var constant ;
//posição do padre
var bX = 10;
var bY = 150;

//gravidade
var gravity = 2.0;
var gravity_backup = gravity;

//variavel dos pontos
var score = 0;
let bestScore = 0;

// crio os sons

var fly = new Audio();
var scor = new Audio();
const Lose = new Audio();
Lose.src = "SOM/Lose.mp3";

var continua = true;


document.addEventListener("keydown",moveUp);
document.getElementById("btn_again").addEventListener("click",play_again);

function moveUp(){
    if(!continua){
        return false;
    }

    // quando for clicado a gravidade vai ser igual na nasa, inversa    
    gravity = -6.0;
    fly.play();

    setTimeout(function() {
        gravity = gravity_backup;
        
    },80);
};

function game_over(){
continua= false;
document.getElementById("pontos_detail").innerText = score;
document.getElementById("game_over").style = "display: inline";
document.getElementById("record").innerText = bestScore;
gravity = 0;
}

function play_again(){
    continua = true;
    score = 0;
    gravity = gravity_backup;
    bY = 150;
    document.getElementById("pontos_detail").innerText = score;
    document.getElementById("game_over").style = "display: none";
    pipe = [];
    pipe[0] = {
        x: stage.width,
        y: 0
    } 
}

var pipe = [];

pipe[0] = {
    // ele inicia sempre no final da tela
    x: stage.width,
    y: 0
}

function draw(){
    //desenho a primeira imagem e informo aonde ela vai ficar, x=0 y=0
    ctx.drawImage(bg,0,0);

    for(var i =0; i< pipe.length; i++ ){

    constant = pipeNorth.height + gap;
    ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y); 
    ctx.drawImage(pipeSouth,pipe[i].x, pipe[i].y+constant);

    if(continua){
       pipe[i].x--;  
    }

   

    if(pipe[i].x==135){
        pipe.push({
            x: stage.width,
            y: Math.floor( Math.random()* pipeNorth.height)- pipeNorth.height
        })
    }
// teste para ver se ele esta tocando o o cano na primeira linha analisando o eixo x, e na segunda checando o eixo y, e na terceira teste se ele nao encostou no chão
    if(bX+padre.width>=pipe[i].x && bX<= pipe[i].x + pipeNorth.width 
        && (bY <= pipe[i].y+ pipeNorth.height || bY + padre.height >= pipe[i].y+constant)
        || bY + padre.height >= stage.height - fg.height )
        {
            
            
            game_over();

            
            
        }

    

    if(pipe[i].x == 5){
        score++;
        Lose.play();
        bestScore = Math.max(bestScore,score);
        
    }
} 
    //desenhor o chão, para criar a variavel y, pego a altura total do fundo, e diminuo pelo tamanho do chão, então o chão vai ficar perfeitamente grudado no chão e não vai roubar parte do desenho
    ctx.drawImage(fg,0,stage.height-fg.height);

    var pd = ctx.drawImage(padre,bX,bY);

    // para que o padre continue caindo, ele começa no y 150, se não ouvesse está variavel ele iria se manter no 150, mas com ela, ele fica no 150, depois 152 para sempre se movimenta
    bY +=gravity;

    

// acho o meio da tela para mostrar o pontos
    var width_canvas = (stage.width/2) - 10;
    ctx.fillStyle = "#FFF";
    //cor branca
    ctx.strokeStyle = "#000"
    // preto    
    ctx.font = "70px Flappy";
    // a fonte 
    ctx.fillText(score,width_canvas,80);
    ctx.strokeText(score,width_canvas,80);  
    

    requestAnimationFrame(draw);
}

window.onload = function(){
    draw();
};


