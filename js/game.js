var ball;

function startGame() {
    ball = new component(20, 20, "#156694", 230, 120);
    ball2 = new component(20, 20, "red", 450, 230);
    area.start();
}

var area = {
    canvas: document.createElement("canvas"),
    start: function() {
        this.canvas.id = 'game';
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[6]);
        this.interval = setInterval(updateGameArea, 10);
        
        while((ball.x==ball2.x) && (ball.y == ball2.y)){
            window.alert("You have won the game!!!")
            
         }
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.update = function() {
        ct = area.context;
        ct.fillStyle = color;
        ct.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

function updateGameArea() {
    area.clear();
    ball.newPos();
    ball2.newPos();
    ball.update();
    ball2.update();
}

function move(dir) {
    switch (dir) {
        case "up":
            ball.speedY = -1;
            ball.speedX = 0;

            break;
        case "left":
            ball.speedX = -1;
            ball.speedY = 0;
            break;

        case "down":
            ball.speedY = 1;
            ball.speedX = 0;
            break;
        case "right":
            ball.speedX = 1;
            ball.speedY = 0;
            break;


    }
}
// function moveup() {
//     ball.speedY -= 1; 
// }

// function movedown() {
//     ball.speedY += 1; 
// }

// function moveleft() {
//     ball.speedX -= 1; 
// }

// function moveright() {
//     ball.speedX += 1; 
// }