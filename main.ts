scene.onOverlapTile(SpriteKind.Player, myTiles.tile2, function (sprite, location) {
    info.changeScoreBy(3)
    tiles.setTileAt(location, myTiles.tile3)
    music.jumpUp.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.changeScoreBy(5)
    tiles.setTileAt(location, myTiles.tile3)
    music.jumpUp.play()
})
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    info.changeScoreBy(1)
    tiles.setTileAt(location, myTiles.tile3)
    music.baDing.play()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    info.changeScoreBy(4)
    tiles.setTileAt(location, myTiles.tile3)
    music.wawawawaa.play()
})
info.setScore(0)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . c c . c c . . . . . . . . 
    . . f 3 c c 3 c c c . . . . . . 
    . f c 3 b c 3 b c c c . . . . . 
    f c b b b b b b b b f f . . . . 
    c c 1 b b b 1 b b b f f . . . . 
    c b b b b b b b b c f f f . . . 
    c b 1 f f 1 c b b f f f f . . . 
    f f 1 f f 1 f b c c b b b . . . 
    f f f f f f f b f c c c c . . . 
    f f 2 2 2 2 f b f b b c c c . . 
    . f 2 2 2 2 2 b c c b b c . . . 
    . . f 2 2 2 b f f c c b b c . . 
    . . . f f f f f f f c c c c c . 
    . . . . . . . . . . . . c c c c 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 150, 150)
scene.setBackgroundColor(6)
tiles.setTilemap(tiles.createTilemap(hex`1000100002000000000000000000000000000501000000010101060101010101010101010100000000010000000000070000000101070000010101010101010001010001010101000101000400000100010100010000000001010001010001000101000101010100010107000000000001000001010101000106010101000101010001010101000001000000010001010100010101010001010001000100010000000101070000010100010001000100010001010001000101000108000001000000010100010001000001010101010001000101000100000001000000000000010701010001000101010001010101010101010105010101010100000000000000000003`, img`
    . . . . . . . . . . . . . . . 2 
    . . . 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 . . . . 2 . . . . . . . . . 2 
    2 . . . 2 2 2 2 2 2 2 . 2 2 . 2 
    2 2 2 . 2 2 . . . . 2 . 2 2 . 2 
    . . . . 2 2 . 2 2 . 2 . 2 2 . 2 
    2 2 2 . 2 2 . . . . . . 2 . . 2 
    2 2 2 . 2 2 2 2 2 . 2 2 2 . 2 2 
    2 2 . . 2 . . . 2 . 2 2 2 . 2 2 
    2 2 . 2 2 . 2 . 2 . 2 . . . 2 2 
    . . . 2 2 . 2 . 2 . 2 . 2 . 2 2 
    . 2 . 2 2 . 2 . . . 2 . . . 2 2 
    . 2 . 2 . . 2 2 2 2 2 . 2 . 2 2 
    . 2 . . . 2 . . . . . . 2 . 2 2 
    . 2 . 2 2 2 . 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.stairLadder,sprites.dungeon.chestOpen,sprites.dungeon.chestClosed,sprites.dungeon.purpleSwitchDown,myTiles.tile1,myTiles.tile2], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.collectibleRedCrystal)
scene.cameraFollowSprite(mySprite)
info.startCountdown(35)
