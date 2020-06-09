let canvas = document.getElementById("stage");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    X: 8 * box,
    y: 8 * box
}

let direction = "right";


function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha(){
    for(i=o; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarJogo() {
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
}

let jogo = setInterval(iniciarJogo, 100);


