//Welcome to Ochyt Platformer III ALPHA! If you encounter any bugs, and you know how to fix them, please do so here. Once done, please send the updated version to me so that we can continue to create a good game. Any sent and accepted help will me mentioned in the credits.
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        if (jumpBoost == true) {
            mySprite.vy = -250
        } else {
            mySprite.vy = -200
        }
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(1)
    music.baDing.play()
    World_Restored += 1
    if (World_Restored == 1) {
        tiles.setTileAt(tiles.getTileLocation(0, 7), sprites.castle.tilePath1)
    } else if (World_Restored == 2) {
        tiles.setTileAt(tiles.getTileLocation(1, 7), sprites.castle.tilePath2)
    } else if (World_Restored == 3) {
        tiles.setTileAt(tiles.getTileLocation(2, 7), sprites.castle.tilePath2)
    } else if (World_Restored == 4) {
        tiles.setTileAt(tiles.getTileLocation(3, 7), sprites.castle.tilePath2)
    } else if (World_Restored == 5) {
        tiles.setTileAt(tiles.getTileLocation(4, 7), sprites.castle.tilePath2)
    } else if (World_Restored == 6) {
        game.splash("Ghost Islands")
        tiles.setTileAt(tiles.getTileLocation(10, 18), sprites.castle.tilePath1)
    } else if (World_Restored == 7) {
        tiles.setTileAt(tiles.getTileLocation(11, 18), sprites.castle.tilePath2)
    } else if (World_Restored == 8) {
        tiles.setTileAt(tiles.getTileLocation(12, 18), sprites.castle.tilePath3)
    } else if (World_Restored == 9) {
        tiles.setTileAt(tiles.getTileLocation(12, 19), sprites.castle.tilePath6)
    } else if (World_Restored == 10) {
        tiles.setTileAt(tiles.getTileLocation(12, 20), sprites.castle.tilePath9)
    } else if (World_Restored == 11) {
        game.splash("Thanks For Playing!", "ALPHA 1.2.1")
        scene.setBackgroundColor(9)
    } else {
        game.splash("Thanks For Playing!", "ALPHA 1.2.1")
        scene.setBackgroundColor(9)
    }
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Glowing_Anticubes_Collected == 1) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(246, 21))
    } else if (Glowing_Anticubes_Collected >= 3) {
        console.log("Warning: You might be playing on an instable version of the game. Please disable any mod or experimental feature if you want to use Alpha Warp.")
    } else {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(246, 6))
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile15`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
    info.changeLifeBy(-1)
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
    info.changeLifeBy(-1)
})

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(11, 16))
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile25`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile18`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
    info.changeLifeBy(-1)
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile20`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`Jump boost`, function (sprite, location) {
    jumpBoost = true
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile10`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    info.changeScoreBy(10)
    music.baDing.play()
    Glowing_Anticubes_Collected += 1
    if (Glowing_Anticubes_Collected == 1) {
        for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
            tiles.setTileAt(value, sprites.castle.tilePath5)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
            tiles.setTileAt(value, sprites.castle.tilePath1)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
            tiles.setTileAt(value, sprites.castle.tilePath2)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
            tiles.setTileAt(value, sprites.castle.tilePath3)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
            tiles.setTileAt(value, sprites.castle.tilePath6)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile9`)) {
            tiles.setTileAt(value, sprites.castle.tilePath9)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile8`)) {
            tiles.setTileAt(value, sprites.castle.tilePath8)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile7`)) {
            tiles.setTileAt(value, sprites.castle.tilePath7)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
            tiles.setTileAt(value, sprites.castle.tilePath4)
        }
        tiles.setTileAt(tiles.getTileLocation(11, 13), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(12, 13), assets.tile`transparency16`)
        tiles.setTileAt(tiles.getTileLocation(13, 13), assets.tile`transparency16`)
    } else if (Glowing_Anticubes_Collected == 2) {
        for (let value of tiles.getTilesByType(assets.tile`myTile36`)) {
            tiles.setTileAt(value, sprites.castle.tilePath5)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile31`)) {
            tiles.setTileAt(value, sprites.castle.tilePath1)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile32`)) {
            tiles.setTileAt(value, sprites.castle.tilePath2)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile33`)) {
            tiles.setTileAt(value, sprites.castle.tilePath3)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile37`)) {
            tiles.setTileAt(value, sprites.castle.tilePath6)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile41`)) {
            tiles.setTileAt(value, sprites.castle.tilePath9)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile40`)) {
            tiles.setTileAt(value, sprites.castle.tilePath8)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile39`)) {
            tiles.setTileAt(value, sprites.castle.tilePath7)
        }
        for (let value of tiles.getTilesByType(assets.tile`myTile35`)) {
            tiles.setTileAt(value, sprites.castle.tilePath4)
        }
        tiles.setTileAt(tiles.getTileLocation(7, 28), assets.tile`fakeBorder`)
        tiles.setTileAt(tiles.getTileLocation(8, 28), assets.tile`fakeBorder`)
        tiles.setTileAt(tiles.getTileLocation(9, 28), assets.tile`fakeBorder`)
    }
})

scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile26`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
    info.changeLifeBy(-1)
})

let Glowing_Anticubes_Collected = 0
let World_Restored = 0
let jumpBoost = false
let mySprite: Sprite = null
game.showLongText("Dear player, you are playing on an instable version. We will give you 10 seconds to enable the Console Log in the menu. Please re-enable your Console Log if it takes up too much of your screen. Time starts as soon as you click A.", DialogLayout.Full)
pause(10000)
console.log("Warning: This game is still in Alpha. The finished product may differ from this version.")
console.log("If bugs occur, please tell the developers.")
mySprite = sprites.create(assets.image`Tycho the Slime`, SpriteKind.Player)
mySprite.ay = 500
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(15)
tiles.setCurrentTilemap(tilemap`level`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile2`)
game.splash("???")
info.setScore(0)
controller.moveSprite(mySprite, 100, 0)
console.log("Game Ready.")
game.showLongText("It is possible that bugs may occur. That is why we made it possible that in the ALPHA, the (A) button brings you to the next level, and the (B) button brings you to the level end. Please use these tools onely when neccecairy.", DialogLayout.Bottom)
