namespace SpriteKind {
    export const Projectile2 = SpriteKind.create()
    export const snake = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile2, SpriteKind.Player, function (sprite, otherSprite) {
    falling = sprites.create(img`
        . . 2 2 2 2 . . 
        . 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 
        . 2 2 2 2 2 2 . 
        . . 2 2 2 2 . . 
        `, SpriteKind.Projectile)
    falling.setBounceOnWall(true)
    falling.setPosition(sprite.x, sprite.y - 5)
    falling.setVelocity(sprite.vx, 0 - sprite.vy)
    falling.ay = sprite.ay
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.setScore(info.score() + 1)
    sprite.destroy()
})
scene.onHitWall(SpriteKind.Projectile2, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`tile3`)) {
        info.changeLifeBy(-1)
        sprite.destroy()
    }
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    if (tiles.tileAtLocationEquals(location, assets.tile`tile3`)) {
        info.changeLifeBy(-1)
        sprite.destroy()
    }
})
let limit = 0
let falling: Sprite = null
let p2Basket: Sprite = null
let basket: Sprite = null
let s4Dir = 1
info.setLife(3)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), basket)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), p2Basket)
basket = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 1 2 1 2 1 2 1 2 1 2 . . . 
    . . 2 1 2 1 2 1 2 1 2 1 2 . . . 
    . . 2 1 2 1 2 1 2 1 2 1 2 . . . 
    . . 2 1 2 1 2 1 2 1 2 1 2 . . . 
    . . 2 1 2 1 2 1 2 1 2 1 2 . . . 
    . . 2 1 2 1 2 1 2 1 2 1 2 . . . 
    . . 2 1 2 1 2 1 2 1 2 1 2 . . . 
    . . 2 1 2 1 2 1 2 1 2 1 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
basket.setPosition(53, 100)
p2Basket = sprites.create(assets.image`myImage`, SpriteKind.Player)
p2Basket.setPosition(106, 100)
controller.moveSprite(basket, 160, 0)
controller.player2.moveSprite(p2Basket, 100, 0)
let mySprite4 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . 8 8 8 8 8 8 8 1 1 1 1 1 . . . 
    8 8 8 8 8 8 8 8 1 1 1 1 1 1 . . 
    8 8 8 8 8 8 8 8 1 1 1 1 1 1 . . 
    8 8 8 8 8 8 8 8 1 1 1 1 1 1 . . 
    8 8 8 8 8 1 8 8 1 1 1 1 1 1 . . 
    8 8 8 8 8 1 1 8 1 1 1 1 1 1 . . 
    8 8 8 8 8 1 1 1 1 1 1 1 1 1 . . 
    8 8 8 8 8 1 1 1 1 1 1 1 1 1 . . 
    8 8 8 8 8 1 1 8 1 1 1 1 1 1 . . 
    8 8 8 8 8 1 8 8 1 1 1 1 1 1 . . 
    8 8 8 8 8 8 8 8 1 1 1 1 1 1 . . 
    8 8 8 8 8 8 8 8 1 1 1 1 1 1 . . 
    . 8 8 8 8 8 8 8 1 1 1 1 1 . . . 
    . . . 8 8 8 . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.snake)
mySprite4.setFlag(SpriteFlag.Ghost, true)
mySprite4.setPosition(-7, 100)
tiles.setTilemap(tilemap`level`)
game.onUpdateInterval(2200, function () {
    mySprite4.vx = 10 * s4Dir
    s4Dir = s4Dir * -1
})
game.onUpdateInterval(2000, function () {
    if (info.score() < 10 || randint(1, Math.min(50, info.score())) < 10) {
        falling = sprites.create(img`
            . . 2 2 2 2 . . 
            . 2 2 2 2 2 2 . 
            2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 
            . 2 2 2 2 2 2 . 
            . . 2 2 2 2 . . 
            `, SpriteKind.Projectile)
    } else {
        falling = sprites.create(img`
            . . 8 8 8 8 . . 
            . 8 8 8 8 8 8 . 
            8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 
            8 8 8 8 8 8 8 8 
            . 8 8 8 8 8 8 . 
            . . 8 8 8 8 . . 
            `, SpriteKind.Projectile2)
    }
    falling.setPosition(randint(20, 140), 20)
    limit = Math.min(10, info.score())
    falling.setVelocity(randint(-100, 100), randint(0 - limit, 5))
    falling.ay = 20
    falling.setBounceOnWall(true)
})
