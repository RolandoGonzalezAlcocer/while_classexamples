input.onPinPressed(TouchPin.P0, function () {
    counter = 0
    while (counter <= 10) {
        basic.showNumber(counter)
        music.playTone(262, music.beat(BeatFraction.Half))
        counter += 1
    }
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    index = 4
    while (index >= 0) {
        led.plot(index, index)
        index += -1
        basic.pause(100)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    counter = 0
    for (let index = 0; index <= 5; index++) {
        basic.showNumber(counter)
        music.playTone(262, music.beat(BeatFraction.Half))
    }
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    while (!(input.buttonIsPressed(Button.B))) {
        music.playTone(262, music.beat(BeatFraction.Half))
        music.playTone(523, music.beat(BeatFraction.Half))
    }
})
let index = 0
let counter = 0
music.setTempo(80)
music.setVolume(70)
music.playTone(698, music.beat(BeatFraction.Whole))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Quarter))
music.playTone(440, music.beat(BeatFraction.Quarter))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(392, music.beat(BeatFraction.Whole))
music.playTone(440, music.beat(BeatFraction.Double))
music.playTone(523, music.beat(BeatFraction.Whole))
music.playTone(523, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(659, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Quarter))
music.playTone(440, music.beat(BeatFraction.Quarter))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(392, music.beat(BeatFraction.Whole))
music.playTone(440, music.beat(BeatFraction.Double))
music.playTone(523, music.beat(BeatFraction.Whole))
music.playTone(523, music.beat(BeatFraction.Half))
music.playTone(587, music.beat(BeatFraction.Half))
music.playTone(698, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(392, music.beat(BeatFraction.Whole))
music.playTone(440, music.beat(BeatFraction.Double))
music.playTone(523, music.beat(BeatFraction.Double))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(659, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Quarter))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(440, music.beat(BeatFraction.Half))
music.playTone(392, music.beat(BeatFraction.Whole))
music.playTone(440, music.beat(BeatFraction.Double))
music.playTone(523, music.beat(BeatFraction.Double))
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Ghost)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
