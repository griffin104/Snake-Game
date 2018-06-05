let doDraw = (function () {
    let snakeBody = function(x, y) {
        ctx.fillStyle = 'green';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    }

    let paintApple = function(x, y) {
        ctx.fillStyle = 'red';
        ctx.fillRect(x*snakeSize, y*snakeSize, snakeSize, snakeSize);
    }

    let drawSnake = function() {
        snake = [];
        for (let i = 4; i >= 0; i--) {
            snake.push({x:i, y:0});
        }
    }

    let createApple = function() {
        apple = {
            x : Math.floor(Math.random() * gridWidth),
            y : Math.floor(Math.random() * gridHeight)
        }
        for (let i = 0; i < snake.length; i++) {
            if (snake[i].x === apple.x && snake[i].y === apple.y) {
                apple = {
                    x : Math.floor(Math.random() * gridWidth),
                    y : Math.floor(Math.random() * gridHeight)
                }
                i = 0;
            }
        }
    }

    let checkCollision = function(x, y, array) {
        for(var i = 0; i < array.length; i++) {
            if(array[i].x === x && array[i].y === y)
            return true;
        } 
        return false;
    }

    let paint = function() {
        ctx.fillStyle = "lightgrey";
        ctx.fillRect(0 , 0 , myCanvas.width - myCanvas.width % snakeSize , myCanvas.height - myCanvas.height % snakeSize);

        ctx.strokeStyle = "darkgrey";
        ctx.strokeRect(0 , 0 , myCanvas.width - myCanvas.width % snakeSize , myCanvas.height - myCanvas.height % snakeSize);

        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        if (direction === "right") {
            snakeX++;
        } else if (direction === "left") {
            snakeX--;
        } else if (direction === "up") {
            snakeY--;
        } else if (direction === "down") {
            snakeY++;
        }

        if (snakeX === -1 || snakeY === -1 || snakeX === gridWidth || snakeY === gridHeight || checkCollision(snakeX, snakeY, snake)) {
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            document.getElementById("title").style.display = "block";
            document.getElementById("game").style.display = "none";
            score = 0;
            clearInterval(gameLoop);
            return;
        }
        
        let tail = {
            x: snakeX,
            y: snakeY
        };

        if (snakeX === apple.x && snakeY === apple.y) {
            createApple();
            document.getElementById("curScore").innerHTML = "Score: " + ++score;
            if (score > hiscore) {
                hiscore = score;
                document.getElementById("highScore").innerHTML = "Hi-Score: " + hiscore;
            }
            clearInterval(gameLoop);
            gameLoop = setInterval(paint, speed-=1);
        } else {
            snake.pop();
        }

        snake.unshift(tail);

        for (let i = 0; i < snake.length; i++) {
            snakeBody(snake[i].x, snake[i].y);
        }

        paintApple(apple.x, apple.y);
    }

    let init = function() {
        document.getElementById("curScore").innerHTML = "Score: " + score;
        document.getElementById("highScore").innerHTML = "Hi-Score: " + hiscore;
        direction = 'down';
        speed = document.getElementById("speed").options[document.getElementById("speed").selectedIndex].value
        drawSnake();
        createApple();
        gameLoop = setInterval(paint, speed);
    }

return {
    init: init
    }
}());