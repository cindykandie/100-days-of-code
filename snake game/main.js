const cvs = document.getElementById('snake')
const ctx = cvs.getContext('2d')

// create the image
const box = 32;

// load images
const ground = new Image();
ground.src = 'butterfly.jpg'

let foodImg = new Image();
foodImg.src = 'food.png'

//create snake
let snake=[]
snake[0] = {
    x: 9* box,
    y:10* box
}

//create food

let food = {
    x:Math.floor(Math.random()*17+1)*box,
    y:Math.floor(Math.random()*15+3)*box
}

//score variable
let score = 0

//Control the snake
document.addEventListener('keydown',direction);
let d;
function direction(event){
    if(event.keycode == 37 && d!="RIGHT"){
        d="LEFT";
    }else if(event.keycode == 38 && d!="DOWN"){
        d="UP";
    }else if(event.keycode == 39 && d!="LEFT"){
    d="RIGHT";
    }else if(event.keycode == 40 && d!="UP"){
        d="DOWN";
    }
}

//check collision
function collision(head, array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y){
            return true
        }
        return false
    }

}
//draw everything to canvas

function draw(){
    ctx.drawImage(ground,0,0)
    for(let i = 0; i < snake.length;i++){
        ctx.fillStyle = (i == 0)?"green":"white"
        ctx.fillRect(snake[i].x,snake[i].y,box,box)

        
        ctx.strokeStyle = "red"
        ctx.strokeRect(snake[i].x,snake[i].y,box,box)
    }
    ctx.drawImage(foodImg, food.x, food.y)

    // old head position
    let snakeX = snake[0].x
    let snakeY= snake[0].y


    //which direction
    if(d = 'LEFT') snakeX -= box
    if(d = 'UP') snakeY -= box
    if(d = 'RIGHT') snakeX += box
    if(d = 'DOWN') snakeY += box

    //if snakes eats food
    if(snakeX==food.x && snakeY==food.y){
        score++
        food = {
            x:Math.floor(Math.random()*17+1)*box,
            y:Math.floor(Math.random()*15+3)*box
        }
        //dont remove tailb
    }else{
            snake.pop()
        }

    //game over
    if (snakeX < box || snakeX>17*box || snakeY<3*box || snakeY>17*box){
        clearInterval(game)
    }




    //Add new head
    let newHead = {
        x:snakeX,
        y:snakeY

    }
    snake.unshift(newHead)

    //remove taile

    ctx.fillStyle = "white"
    ctx.font ="45px cursive"
    ctx.fillText(score,2*box,1.5*box)
}

// call the draw function every 100ms
let game = setInterval(draw,1000)