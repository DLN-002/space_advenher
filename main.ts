controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart = darts.create(img`
        5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 
        `, SpriteKind.Projectile)
    tiles.placeOnTile(myDart, mySprite.tilemapLocation())
    myDart.y += 5
    myDart.x += 5
    myDart.setFlag(SpriteFlag.DestroyOnWall, true)
    myDart.gravity = 0
    myDart.throwDart()
})
let myDart: Dart = null
let mySprite: Sprite = null
scene.setBackgroundImage(assets.image`space`)
scroller.scrollBackgroundWithSpeed(-50, 0)
mySprite = sprites.create(assets.image`ship`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
tiles.setCurrentTilemap(tilemap`level2`)
