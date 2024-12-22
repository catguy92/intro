namespace SpriteKind {
    export const play = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.gameOver(false)
    sprites.destroy(monkey, effects.disintegrate, 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (monkey.vy == 0) {
        monkey.vy = -145
        music.play(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    monkey,
    [img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        c d e e d d d d e e d d f . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e b d c . f f 
        . f d d d d e e e f f c . f e f 
        . f f f f f f e e e e f . f e f 
        . f f f f e e e e e e e f f e f 
        f d d f d d f e f e e e e f f . 
        f d b f d b f e f e e e e f . . 
        f f f f f f f f f f f f e f . . 
        . . . . . . . . . f c d d f . . 
        . . . . . . . . . . f f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f f . . . . 
        . c d d d d d d e e d d f . . . 
        . c d f d d f d e e b d c . . . 
        c d d f d d f d e e b d c . f f 
        c d e e d d d d e e f c . f e f 
        c d d d d c d e e e f . . f e f 
        . f c c c d e e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . f f e f e e f e e e e f . . 
        . f e f f e e f f f e e e f . . 
        f d d b d d c f f f f f f b f . 
        f d d c d d d f . . f c d d f . 
        . f f f f f f f . . . f f f . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f f f . . . . 
        . . f d d d e e e e d d f . . . 
        . c d d d d d e e e b d c . . . 
        . c d d d d d d e e b d c . . . 
        c d d f d d f d e e f c . f f . 
        c d d f d d f d e e f . . f e f 
        c d e e d d d d e e f . . f e f 
        . f d d d c d e e f f . . f e f 
        . . f f f d e e e e e f . f e f 
        . . . . f e e e e e e e f f f . 
        . . . . f f e e e e e b f f . . 
        . . . f e f f e e c d d f f . . 
        . . f d d b d d c f f f . . . . 
        . . f d d c d d d f f . . . . . 
        . . . f f f f f f f . . . . . . 
        `,img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . . . 
        c c c c c d d e e e f c . . . . 
        . f d d d d e e e f f . . . . . 
        . . f f f f f e e e e f . . . . 
        . . . . f f e e e e e e f . f f 
        . . . f e e f e e f e e f . e f 
        . . f e e f e e f e e e f . e f 
        . f b d f d b f b b f e f f e f 
        . f d d f d d f d d b e f f f f 
        . . f f f f f f f f f f f f f . 
        `],
    150,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, monkey)
    monkey.setImage(img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, monkey)
    monkey.setImage(img`
        . . . . f f f f f . . . . . . . 
        . . . f e e e e e f . . . . . . 
        . . f d d d d e e e f . . . . . 
        . c d f d d f d e e f f . . . . 
        . c d f d d f d e e d d f . . . 
        c d e e d d d d e e b d c . . . 
        c d d d d c d d e e b d c . f f 
        c c c c c d d d e e f c . f e f 
        . f d d d d d e e f f . . f e f 
        . . f f f f f e e e e f . f e f 
        . . . . f e e e e e e e f f e f 
        . . . f e f f e f e e e e f f . 
        . . . f e f f e f e e e e f . . 
        . . . f d b f d b f f e f . . . 
        . . . f d d c d d b b d f . . . 
        . . . . f f f f f f f f f . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    monkey,
    [img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        f f . c d b e e d d c d d d d c 
        f e f . c f e e d d d c c c c c 
        f e f . . f f e e d d d d d f . 
        f e f . f e e e e f f f f f . . 
        f e f f e e e e e e e f . . . . 
        . f f e e e e f e f f e f . . . 
        . . f e e e e f e f f e f . . . 
        . . . f e f f b d f b d f . . . 
        . . . f d b b d d c d d f . . . 
        . . . f f f f f f f f f . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . . f e e d f d d f d c . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        f f . c d b e e e d d c c c c c 
        f e f . c f f e e e d d d d f . 
        f e f . f e e e e f f f f f f . 
        f e f f e e e e e e e f f f f . 
        . f f e e e e f e f d d f d d f 
        . . f e e e e f e f b d f b d f 
        . . f e f f f f f f f f f f f f 
        . . f d d c f . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . f f e e e d d d d f . . 
        . . . f d d e e d d d d d d c . 
        . . . c d b e e d f d d f d c . 
        f f . c d b e e d f d d f d d c 
        f e f . c f e e d d d d e e d c 
        f e f . . f e e e d c d d d d c 
        f e f . . f f e e e d c c c f . 
        f e f . f e e e e f f f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f e e e e f e e f e f f . . 
        . . f e e e f f f e e f f e f . 
        . f b f f f f f f c d d b d d f 
        . f d d c f . . f d d d c d d f 
        . . f f f . . . f f f f f f f . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . f f f e e e e e f . . . 
        . . . f d d e e e e d d d f . . 
        . . . c d b e e e d d d d d c . 
        . . . c d b e e d d d d d d c . 
        . f f . c f e e d f d d f d d c 
        f e f . . f e e d f d d f d d c 
        f e f . . f e e d d d d e e d c 
        f e f . . f f e e d c d d d f . 
        f e f . f e e e e e d f f f . . 
        . f f f e e e e e e e f . . . . 
        . . f f b e e e e e f f . . . . 
        . . f f d d c e e f f e f . . . 
        . . . . f f f c d d b d d f . . 
        . . . . . f f d d d c d d f . . 
        . . . . . . f f f f f f f . . . 
        `,img`
        . . . . . . . f f f f f . . . . 
        . . . . . . f e e e e e f . . . 
        . . . . . f e e e d d d d f . . 
        . . . . f f e e d f d d f d c . 
        . . . f d d e e d f d d f d c . 
        . . . c d b e e d d d d e e d c 
        . . . c d b e e d d c d d d d c 
        . . . . c f e e e d d c c c c c 
        . . . . . f f e e e d d d d f . 
        . . . . f e e e e f f f f f . . 
        f f . f e e e e e e f f . . . . 
        f e . f e e f e e f e e f . . . 
        f e . f e e e f e e f e e f . . 
        f e f f e f b b f b d f d b f . 
        f f f f e b d d f d d f d d f . 
        . f f f f f f f f f f f f f . . 
        `],
    150,
    true
    )
})
function startlevel () {
    if (level == 0) {
        monkey = sprites.create(img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            f f . c d b e e d d c d d d d c 
            f e f . c f e e d d d c c c c c 
            f e f . . f f e e d d d d d f . 
            f e f . f e e e e f f f f f . . 
            f e f f e e e e e e e f . . . . 
            . f f e e e e f e f f e f . . . 
            . . f e e e e f e f f e f . . . 
            . . . f e f f b d f b d f . . . 
            . . . f d b b d d c d d f . . . 
            . . . f f f f f f f f f . . . . 
            `, SpriteKind.Player)
        tiles.setCurrentTilemap(tilemap`level2`)
    } else if (level == 1) {
        tiles.setCurrentTilemap(tilemap`level5`)
        sprites.destroy(slime)
    }
    scene.setBackgroundColor(11)
    controller.moveSprite(monkey, 70, 0)
    monkey.ay = 200
    tiles.placeOnRandomTile(monkey, assets.tile`myTile4`)
    scene.cameraFollowSprite(monkey)
    slime = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . . f 7 7 7 7 7 7 f . . . . 
        . . . f 7 7 f 7 f 7 7 7 f . . . 
        . . . f 7 7 f 7 f 7 7 7 f . . . 
        . . . f 7 7 f 7 f 7 7 7 f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . f f 6 6 6 6 6 6 6 6 f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f f f f f f f f f f f f . . 
        `, SpriteKind.Enemy)
    slime.ax = 50
    tiles.placeOnTile(slime, tiles.getTileLocation(8, 10))
    animationRun = [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f 7 7 7 7 7 7 f f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 f 7 f 7 7 f . . . 
        . . f 6 7 7 7 f 7 f 7 7 6 f . . 
        . . f 6 7 7 7 7 7 7 7 7 6 f . . 
        . . f 6 7 7 7 7 7 7 7 7 6 f . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f f f f f f f f f f f f . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f 7 7 7 7 7 7 f f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 7 f 7 f 7 7 f . . . 
        . . f 6 7 7 7 f 7 f 7 7 6 f . . 
        . . f 6 7 7 7 7 7 7 7 7 6 f . . 
        . . f 6 7 7 7 7 7 7 7 7 6 f . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . f 7 7 7 7 f f f 7 7 7 7 7 f . 
        . f 7 7 f f f f f f f 7 7 7 f . 
        . . f f f . . . . . f f f f . . 
        `]
    animationHit = [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f 7 7 7 7 7 7 f f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 f 7 f 7 7 7 f . . . 
        . . f 6 7 7 f 7 f 7 7 7 6 f . . 
        . . f 6 7 7 7 7 7 7 7 7 6 f . . 
        . . f 6 7 7 7 7 7 7 7 7 6 f . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . f 7 7 7 7 7 7 7 7 7 7 7 7 f . 
        . . f f f f f f f f f f f f . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f 7 7 7 7 7 7 f f . . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . f 7 7 f 7 f 7 7 7 f . . . 
        . . f 6 7 7 f 7 f 7 7 7 6 f . . 
        . . f 6 7 7 7 7 7 7 7 7 6 f . . 
        . . f 6 7 7 7 7 7 7 7 7 6 f . . 
        . . f f f 6 6 6 6 6 6 f f f . . 
        . f 7 7 7 7 7 f f f 7 7 7 7 f . 
        . f 7 7 7 f f f f f f f 7 7 f . 
        . . f f f f . . . . . f f f . . 
        `]
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        coconut = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f b b b b b f c f . . . 
            . . . f c b f f b b f f d f . . 
            . . f c c b f c b b b b d d f . 
            . . f c b b b b f f b b b b f . 
            . . f b b b b b f c b b b b f . 
            . . f b b b b b b b b b b b f . 
            . . f b b b b b b b b b b b f . 
            . . f b b b b b b b b b b b f . 
            . . f d b b b b b b b b d d f . 
            . . . f d b b b b b b d d f . . 
            . . . . f d b b b b b d f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        animation.runImageAnimation(
        coconut,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f f . . . . . 
            . . . f b b b b b b d f . . . . 
            . . f b f b b b f b d d f . . . 
            . f b b b b b b b b b d d f . . 
            . f b b b b f b b b b b d f . . 
            . f b b b b b b b b b b b f . . 
            . f b b b b b b b b b b b f . . 
            . f b b b b b b b b b b b f . . 
            . f c b b b b b b b b b b f . . 
            . f c b b b b b b b b d d f . . 
            . . f c b b b b b b d d f . . . 
            . . . f c c c b d d d f . . . . 
            . . . . f f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f b b b b b d f . . . . . 
            . . f b f b b f b d d f . . . . 
            . f b b b b b b b b d d f . . . 
            . f b b b b f b b b b d f . . . 
            . f b b b b b b b b b b f . . . 
            . f b b b b b b b b b b f . . . 
            . f b b b b b b b b b b f . . . 
            . f c b b b b b b b b b f . . . 
            . f c b b b b b b b d d f . . . 
            . . f c b b b b b d d f . . . . 
            . . . f c c c d d d f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f . . . . . . . . 
            . . . d b b b d f . . . . . . . 
            . . d f b f b d d f . . . . . . 
            . f b b b b b b d d f . . . . . 
            . f b b f b b b b d f . . . . . 
            . f b b b b b b b b f . . . . . 
            . f b b b b b b b b f . . . . . 
            . f b b b b b b b b f . . . . . 
            . f c b b b b b b b f . . . . . 
            . f c b b b b b d d f . . . . . 
            . . f c b b b d d f . . . . . . 
            . . . f c d d d f . . . . . . . 
            . . . . f f f f . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f b b b b b d f . . . . . 
            . . f b f b b f b d d f . . . . 
            . f b b b b b b b b d d f . . . 
            . f b b b b f b b b b d f . . . 
            . f b b b b b b b b b b f . . . 
            . f b b b b b b b b b b f . . . 
            . f b b b b b b b b b b f . . . 
            . f c b b b b b b b b b f . . . 
            . f c b b b b b b b d d f . . . 
            . . f c b b b b b d d f . . . . 
            . . . f c c c d d d f . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f f . . . . 
            . . . . f d b b b b b b f . . . 
            . . . f d d b f b b b f b f . . 
            . . f d d b b b b b b b b b f . 
            . . f d b b b b b f b b b b f . 
            . . f b b b b b b b b b b b f . 
            . . f b b b b b b b b b b b f . 
            . . f b b b b b b b b b b b f . 
            . . f b b b b b b b b b b c f . 
            . . f d d b b b b b b b b c f . 
            . . . f d d b b b b b b c f . . 
            . . . . f d d d b c c c f . . . 
            . . . . . f f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . f d b b b b b f . . . 
            . . . . f d d b f b b f b f . . 
            . . . f d d b b b b b b b b f . 
            . . . f d b b b b f b b b b f . 
            . . . f b b b b b b b b b b f . 
            . . . f b b b b b b b b b b f . 
            . . . f b b b b b b b b b b f . 
            . . . f b b b b b b b b b c f . 
            . . . f d d b b b b b b b c f . 
            . . . . f d d b b b b b c f . . 
            . . . . . f d d d c c c f . . . 
            . . . . . . f f f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . f f f f . . . . 
            . . . . . . . f d b b b d . . . 
            . . . . . . f d d b f b f d . . 
            . . . . . f d d b b b b b b f . 
            . . . . . f d b b b b f b b f . 
            . . . . . f b b b b b b b b f . 
            . . . . . f b b b b b b b b f . 
            . . . . . f b b b b b b b b f . 
            . . . . . f b b b b b b b c f . 
            . . . . . f d d b b b b b c f . 
            . . . . . . f d d b b b c f . . 
            . . . . . . . f d d d c f . . . 
            . . . . . . . . f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
        tiles.placeOnTile(coconut, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    if (level == 0) {
        game.splash("oh hi there subject 127!")
        game.splash("welcome to the facility")
        game.splash("your goal is to use the")
        game.splash("left and right buttons to")
        game.splash("move and press a to jump!")
        game.splash("destroy and avoid enemies,")
        game.splash("grab coconuts and go to the")
        game.splash("blue orb to beat the level")
        game.splash("! dodge spikes ,good luck")
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    level += 1
    startlevel()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
    music.play(music.createSong(hex`0078000408020100001c00010a006400f401640000040000000000000000000000000005000004060000000400012c`), music.PlaybackMode.InBackground)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    console.log("monkey: top=" + monkey.top + " bottom=" + monkey.bottom)
    console.log("otherSprite: top=" + otherSprite.top + " bottom=" + otherSprite.bottom)
    if (monkey.y < slime.y) {
        sprites.destroy(otherSprite)
        info.changeScoreBy(2)
    } else {
        sprites.destroy(sprite)
        game.gameOver(false)
    }
})
let coconut: Sprite = null
let animationHit: Image[] = []
let animationRun: Image[] = []
let slime: Sprite = null
let level = 0
let monkey: Sprite = null
startlevel()
// main update loop
game.onUpdate(function () {
    if (slime.isHittingTile(CollisionDirection.Left)) {
        slime.ax = 50
        animation.runImageAnimation(
        slime,
        animationRun,
        300,
        true
        )
    } else if (slime.isHittingTile(CollisionDirection.Right)) {
        slime.ax = -50
        animation.runImageAnimation(
        slime,
        animationHit,
        300,
        true
        )
    }
})
