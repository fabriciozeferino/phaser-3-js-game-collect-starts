import Phaser from 'phaser'

export default class BombEaterSpawner
{
	/**
	 * @param {Phaser.Scene} scene
	 */
	constructor(scene, bombEaterKey = 'bombEater')
	{
		this.scene = scene
		this.key = bombEaterKey

		this._group = this.scene.physics.add.group()
	}

	get group()
	{
		return this._group
	}

	spawn(playerX = 0)
	{
		const x = (playerX < -400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400)

		const bombEater = this.group.create(x, 16, this.key)
		bombEater.setBounce(1)
		bombEater.setCollideWorldBounds(true)
		bombEater.setVelocity(Phaser.Math.Between(-200, 200), 20)

		this.scene.anims.create({
			key: 'walk',
			frames: this.scene.anims.generateFrameNumbers('bombEater', { start: 0, end: 2 }),
			frameRate: 5,
			repeat: -1,
		})

		bombEater.play('walk')
		
		return bombEater
	}
}
