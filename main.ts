namespace SpriteKind {
    export const Ball = SpriteKind.create()
}
let bouncyBall: Sprite = null
let heroSprite = sprites.create(img`
    . 1 1 1 1 1 1 1 1 . 
    1 2 2 2 2 2 2 2 2 1 
    1 2 2 1 2 2 1 2 2 1 
    1 2 2 1 2 2 1 2 2 1 
    1 2 2 1 1 1 1 2 2 1 
    1 2 2 1 2 2 1 2 2 1 
    1 2 2 1 2 2 1 2 2 1 
    1 2 2 1 2 2 1 2 2 1 
    1 2 2 2 2 2 2 2 2 1 
    . 1 1 1 1 1 1 1 1 . 
    `, SpriteKind.Player)
heroSprite.setPosition(40, 30)
controller.moveSprite(heroSprite)
heroSprite.setStayInScreen(true)
let enemySprite = sprites.create(img`
    . 1 1 1 1 1 1 1 1 . 
    1 5 5 5 5 5 5 5 5 1 
    1 5 5 f f f f 5 5 1 
    1 5 5 f 5 5 5 5 5 1 
    1 5 5 f f f 5 5 5 1 
    1 5 5 f 5 5 5 5 5 1 
    1 5 5 f 5 5 5 5 5 1 
    1 5 5 f f f f 5 5 1 
    1 5 5 5 5 5 5 5 5 1 
    . 1 1 1 1 1 1 1 1 . 
    `, SpriteKind.Enemy)
enemySprite.setPosition(120, 90)
enemySprite.follow(heroSprite, 100)
let foodSprite = sprites.create(img`
    . 1 1 1 1 1 1 1 1 . 
    1 8 8 8 8 8 8 8 8 1 
    1 8 8 1 1 1 1 8 8 1 
    1 8 8 1 8 8 8 8 8 1 
    1 8 8 1 1 1 8 8 8 1 
    1 8 8 1 8 8 8 8 8 1 
    1 8 8 1 8 8 8 8 8 1 
    1 8 8 1 8 8 8 8 8 1 
    1 8 8 8 8 8 8 8 8 1 
    . 1 1 1 1 1 1 1 1 . 
    `, SpriteKind.Food)
foodSprite.setPosition(40, 90)
foodSprite.setVelocity(0, 0)
let projectileSprite = sprites.create(img`
    . 1 1 1 1 1 1 1 1 . 
    1 7 7 7 7 7 7 7 7 1 
    1 7 7 f f f f 7 7 1 
    1 7 7 f 7 7 f 7 7 1 
    1 7 7 f f f f 7 7 1 
    1 7 7 f 7 7 7 7 7 1 
    1 7 7 f 7 7 7 7 7 1 
    1 7 7 f 7 7 7 7 7 1 
    1 7 7 7 7 7 7 7 7 1 
    . 1 1 1 1 1 1 1 1 . 
    `, SpriteKind.Projectile)
projectileSprite.setPosition(120, 30)
projectileSprite.setVelocity(0, 0)
game.onUpdate(function () {

})
game.onUpdateInterval(5000, function () {
    bouncyBall = sprites.create(img`
        . 1 1 1 1 1 1 1 1 . 
        1 9 9 9 9 9 9 9 9 1 
        1 9 9 f f f f 9 9 1 
        1 9 9 f 9 9 f 9 9 1 
        1 9 9 f f f 9 9 9 1 
        1 9 9 f 9 9 f 9 9 1 
        1 9 9 f 9 9 f 9 9 1 
        1 9 9 f f f f 9 9 1 
        1 9 9 9 9 9 9 9 9 1 
        . 1 1 1 1 1 1 1 1 . 
        `, SpriteKind.Ball)
    bouncyBall.setVelocity(0, 0)
    bouncyBall.setBounceOnWall(true)
})