input.onButtonPressed(Button.A, function () {
    max7219_matrix.scrollText(
    "Hola A Todos",
    75,
    500
    )
})
input.onButtonPressed(Button.B, function () {
    dim += 1
    if (dim > 15) {
        dim = 0
    }
    max7219_matrix.brightnessAll(dim)
    max7219_matrix.randomizeAll()
    basic.showNumber(dim)
})
let dim = 0
max7219_matrix.setup(
1,
DigitalPin.P16,
DigitalPin.P15,
DigitalPin.P14,
DigitalPin.P13
)
dim = 0
