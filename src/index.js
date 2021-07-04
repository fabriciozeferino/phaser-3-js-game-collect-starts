import Phaser from 'phaser'

import GameScene from './assets/scenes/GameScene'

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 300 },
		},
	},
	scene: [GameScene],
}

const game = new Phaser.Game(config)
