input.onButtonPressed(Button.A, function () {
    led.unplot(position_x, 0)
    position_x += -1
    if (position_x < 0) {
        position_x = 0
    }
    led.plot(position_x, 0)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(position_x, 0)
    position_x += 1
    if (position_x > 4) {
        position_x = 4
    }
    led.plot(position_x, 0)
})
let position_x = 0
position_x = 2
led.plot(position_x, 0)
basic.forever(function () {
	
})
