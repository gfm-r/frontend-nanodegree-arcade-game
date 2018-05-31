// Enemies our player must avoid
class Enemy {
  constructor(x, y, sp) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.sp = sp;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
  }
  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.sp * dt;
    //ارجاع الحشرة الى موضعها الاصلي بعد ان تكمل الدورة
    if (this.x >= 510)
      this.x = -60;
  }

} //for the class
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
//////////الحشرات///////////////
let en1 = new Enemy(1, 60, 100);
let en2 = new Enemy(1, 144, 70);
let en3 = new Enemy(1, 230, 160);

// Place all enemy objects in an array called allEnemies
let allEnemies = [en1, en2, en3];
///////////////////Player/////////////////////////////////////////////////////
// Place the player object in a variable called player
//متغير نخزن فيه نقاط الاعب my_Score
let my_Score = document.querySelector('.inerTXT');

class Player {
  constructor(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.score = 0;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
  }
  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //عندما يلامس العدو اللاعب يرجع الاعب الى موضعه الاصلي
    if (player.x >= (en1.x - 70) && player.x <= (en1.x + 70) && player.y >= (en1.y - 70) && player.y <= (en1.y + 50)) {
      this.x = 200;
      this.y = 400;
    }
    if (player.x >= (en2.x - 70) && player.x <= (en2.x + 70) && player.y >= (en2.y - 70) && player.y <= (en2.y + 50)) {
      this.x = 200;
      this.y = 400;
    }
    if (player.x >= (en3.x - 70) && player.x <= (en3.x + 70) && player.y >= (en3.y - 70) && player.y <= (en3.y + 50)) {
      this.x = 200;
      this.y = 400;
    }
  }
  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
  handleInput(key) {
    if (key == 'up') {
      if (this.y == 60)
        this.get_Score();
      else
        this.y += -85;
    } else if (key == 'down' && this.y < 400) {
      this.y += 85;
    } else if (key == 'right' && this.x < 400) {
      this.x += +100;
    } else if (key == 'left' && this.x > 1) {
      this.x += -100;
    }
  }
  //زيادة عدد النقاط
  get_Score() {
    this.x = 200;
    this.y = 400;
    this.score++;
    my_Score.innerText++;
    ////////////swal-alert//////////////////////////
    if (this.score == 10) {
      swal({
        title: 'Congratulation! You Won!',
        icon: 'success',
        button: 'Play again!',
      }).then(function() {
        window.location.reload();
        handleInput = 'undefined';
      });

    } //for if
    //////////////////////////////////

  }
}
let player = new Player(200, 400);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  console.log(e.keyCode);
  player.handleInput(allowedKeys[e.keyCode]);
});;
