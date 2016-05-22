window.onload = function() {

  var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

  function preload() {
    this.game.load.atlasJSONHash('player', 'assets/images/playership.png', 'assets/images/playership.json');
  }

  function create() {
    this.game.physics.startSystem(Phaser.Physics.ARCADE);
    player = this.game.add.sprite(200, 300, 'player');

    player.frame = 3;
    player.animations.add('right', [3,4,5,6], 15, false);
    player.animations.add('left', [3,2,1,0], 15, false);
    player.animations.add('return-right', [6,5,4,3], 15, false);
    player.animations.add('return-left', [0,1,2,3], 15, false);
    
    upKey = this.game.input.keyboard.addKey(Phaser.Keyboard.UP);
    downKey = this.game.input.keyboard.addKey(Phaser.Keyboard.DOWN);
    leftKey = this.game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
    rightKey = this.game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
    
  }

  function update() {

    if (upKey.isDown) {

        player.y-=5;

    }

    else if (downKey.isDown) {

        player.y+=5;

    }

    if (leftKey.isDown && player.frame < 3) {

        player.x-=5;

    } else if (leftKey.isDown) {

      player.x-=5;
      player.play('left');

    } else if (!leftKey.isDown && player.frame === 0){

      player.play('return-left');

    } else if (rightKey.isDown && player.frame > 3) {

        player.x+=5;

    } else if (rightKey.isDown) {

      player.x+=5;
      player.play('right');

    } else if (!rightKey.isDown && player.frame === 6) {

      player.play('return-right');

    } 

  }
}