let myCanvas = document.getElementById("snake");
let ctx = myCanvas.getContext("2d");
let snake;
let snakeSize = 20;
let apple;
let gridHeight = Math.floor(myCanvas.height / snakeSize);
let gridWidth = Math.floor(myCanvas.width / snakeSize);
let speed;
let score = 0;
let hiscore = 0;