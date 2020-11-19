// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers.registerTilemapFactory(function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level": return tiles.createTilemap(hex`1000100002000000000000000000000000000501000000010101060101010101010101010100000000010000000000070000000101070000010101010101010001010001010101000101000400000100010100010000000001010001010001000101000101010100010107000000000001000001010101000106010101000101010001010101000001000000010001010100010101010001010001000100010000000101070000010100010001000100010001010001000101000108000001000000010100010001000001010101010001000101000100000001000000000000010701010001000101010001010101010101010105010101010100000000000000000003`, img`
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
`, [myTiles.transparency16,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.stairLadder,sprites.dungeon.chestOpen,sprites.dungeon.chestClosed,sprites.dungeon.purpleSwitchDown,myTiles.tile1,myTiles.tile2], TileScale.Sixteen)
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
