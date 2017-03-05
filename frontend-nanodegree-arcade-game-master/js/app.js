
// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.sprite = 'images/enemy-bug.png';
    this.x= 0;
    this.y = y;
    this.speed = Math.random()*100 + 10;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt,speed) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
if(this.x < ctx.canvas.width){
    this.x += (this.speed * dt);
}
else
{
    this.x = 0;
    this.speed = Math.random() * 100 + Math.random() * 20 + 10;
}
enemyBox = {x: this.x, y: this.y};
    playerBox = {x: player.x, y: player.y};
    if ((enemyBox.x < (playerBox.x + 75)) && ((enemyBox.x + 75) > playerBox.x) && (enemyBox.y < (playerBox.y + 63)) && ((77 + enemyBox.y) > playerBox.y))
         {
          //    console.log("reset");
      setTimeout(this.lostMessage, 500);
      setTimeout(player.reset(), 1000);
    }
};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(){
this.x = 200;
this.y = 410;
this.sprite = 'images/char-boy.png';
};


Player.prototype.reset = function(){
    this.x = 200;
    this.y = 410;
};
//to redraw player image after every input
Player.prototype.render = function(){
     ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
     if(this.y < 0){
        setTimeout(this.winMessage(),1000);
        setTimeout(this.reset(),1000);
     }
};
Player.prototype.update = function()
{
    console.log(this.y);

};
//Win or Loss Message !!!
Player.prototype.winMessage =function() {
    alert("You Won..!! :)");
};
Enemy.prototype.lostMessage = function(){
    alert("You Lose..!! :( Try Again.");
};
//handling input basic switch
Player.prototype.handleInput = function(key){
    switch(key){
        case "left" :
            if(this.x >= 95){
                this.x = this.x - 95;
            }
        break;
        case "right" :
            if(this.x <= 375){
                this.x = this.x + 95;
            }
        break;
        case "up" :
            if(this.y >= 50){
                this.y = this.y - 83;
            }
        break;
        case "down" :
            if(this.y <= 400){
                this.y = this.y + 83;
            }
        break;
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies = [];

for(var i = 0;i < 4;i++)
{
allEnemies.push(new Enemy(this.x,(i *83)-20));
}

var player = new Player();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
