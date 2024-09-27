basic.forever(function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        # # . # #
        . . . . .
        . # # # .
        `)
    music.play(music.stringPlayable("B B - F - - C - ", 120), music.PlaybackMode.UntilDone)
    music.rest(music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . . .
        . # # . #
        . # # . #
        . . . . .
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        `)
    music.play(music.stringPlayable("- D - - A - - C5 ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . . . .
        # # . . .
        # # # # .
        . . . . .
        # . . . .
        `)
    music.play(music.stringPlayable("- D - - A - - C5 ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # # # # .
        # # # # .
        . . . . .
        # # # . .
        # # # . .
        `)
    basic.showString("Hello!")
    music.play(music.stringPlayable("- F - C5 - - C5 - ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . . # . .
        . # # . .
        # # # # .
        # # # # .
        # # # # .
        `)
    basic.showString("HOW ARE YOU")
    basic.showLeds(`
        . . . . .
        . # . # .
        # . . . #
        . # # # .
        . . . . .
        `)
})
