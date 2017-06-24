window.onload = function() {
    var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create });

    function preload () {
        // game.load.image('logo', 'assets/crocodile_vs_hippo_stub.png');
        game.load.image('crocodile', 'assets/crocodile.png');
        game.load.image('hippo', 'assets/hippo.png');
    }

    function create () {
        var crocodile = game.add.sprite(game.world.centerX, game.world.centerY, 'crocodile');
        crocodile.anchor.setTo(-0.1, 0.5);
        crocodile.scale = {x: .25, y: .25};

        var hippo = game.add.sprite(game.world.centerX, game.world.centerY, 'hippo');
        hippo.anchor.setTo(1, 0.5);
        hippo.scale = {x: .25, y: .25};
    }
};
