window.onload = function() {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});
    var cursors;
    var platforms;
    var player;

    function preload () {
        game.load.image('background', 'assets/background.png');
        game.load.image('crocodile', 'assets/crocodile.png');
        game.load.image('hippo', 'assets/hippo.png');
    }

    function create () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        cursors = game.input.keyboard.createCursorKeys();

        // background
        var background = game.add.sprite(0, 0, 'background');
        background.scale.setTo(.5, .5);

        // Platforms
        platforms = game.add.group();
        platforms.enableBody = true;  //  Enable physics for any object that is created in this group

        // Player
        player = game.add.sprite(32, game.world.height - 150, 'crocodile');
        player.scale = {x: .25, y: .25};
        game.physics.arcade.enable(player);
        player.body.bounce.y = 0.2;
        player.body.gravity.y = 300;
        player.body.collideWorldBounds = true;


        // waves
        // var waves = platforms.create(0, game.world.height - 64, 'waves');
        // waves.scale.setTo(1.5, 1);
        // waves.body.immovable = true;

        // characters
        var crocodile = game.add.sprite(game.world.centerX, game.world.centerY, 'crocodile');
        crocodile.anchor.setTo(-0.1, 0.5);
        crocodile.scale = {x: .25, y: .25};

        var hippo = game.add.sprite(game.world.centerX, game.world.centerY, 'hippo');
        hippo.anchor.setTo(1, 0.5);
        hippo.scale = {x: .25, y: .25};
    }

    function update() {
        //  Reset the players velocity (movement)
        player.body.velocity.x = 0;

        if (cursors.left.isDown) {
            //  Move to the left
            player.body.velocity.x = -150;

            player.animations.play('left');
        }
        else if (cursors.right.isDown) {
            //  Move to the right
            player.body.velocity.x = 150;

            player.animations.play('right');
        }
        else{
            //  Stand still
            player.animations.stop();

            player.frame = 4;
        }

        //  Allow the player to jump if they are touching the ground.
        if (cursors.up.isDown && player.body.touching.down && hitPlatform) {
            player.body.velocity.y = -350;
        }
    }
};
