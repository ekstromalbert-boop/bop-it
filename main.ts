let succes = false
let number_command = 0
function my_turn () {
    succes = true
    for (let index = 0; index < 5; index++) {
        number_command = randint(0, 3)
        if (number_command == 0) {
            while (!(input.buttonIsPressed(Button.A) || (input.buttonIsPressed(Button.B) || (input.buttonIsPressed(Button.AB) || input.isGesture(Gesture.Shake))))) {
                basic.showLeds(`
                    . . . . .
                    . # # # .
                    . # . # .
                    . # # # .
                    . # . # .
                    `)
            }
            if (input.buttonIsPressed(Button.B) || (input.buttonIsPressed(Button.AB) || input.isGesture(Gesture.Shake))) {
                succes = false
                break;
            } else {
                basic.showIcon(IconNames.Happy)
            }
        } else if (number_command == 1) {
            while (!(input.buttonIsPressed(Button.A) || (input.buttonIsPressed(Button.B) || (input.buttonIsPressed(Button.AB) || input.isGesture(Gesture.Shake))))) {
                basic.showLeds(`
                    . # # # .
                    . # . # .
                    . # # . .
                    . # . # .
                    . # # # .
                    `)
            }
            if (input.buttonIsPressed(Button.A) || (input.buttonIsPressed(Button.AB) || input.isGesture(Gesture.Shake))) {
                succes = false
                break;
            } else {
                basic.showIcon(IconNames.Happy)
            }
        } else if (number_command == 2) {
            while (!(input.buttonIsPressed(Button.A) || (input.buttonIsPressed(Button.B) || (input.buttonIsPressed(Button.AB) || input.isGesture(Gesture.Shake))))) {
                basic.showLeds(`
                    . . . . .
                    . . # . .
                    . # # # .
                    . . # . .
                    . . . . .
                    `)
            }
            if (!(input.buttonIsPressed(Button.AB)) && (input.buttonIsPressed(Button.A) || (input.buttonIsPressed(Button.B) || input.isGesture(Gesture.Shake)))) {
                succes = false
                break;
            } else {
                basic.showIcon(IconNames.Happy)
            }
        } else if (number_command == 3) {
            while (!(input.buttonIsPressed(Button.A) || (input.buttonIsPressed(Button.B) || (input.buttonIsPressed(Button.AB) || input.isGesture(Gesture.Shake))))) {
                basic.showLeds(`
                    . . # . .
                    . # . # .
                    # . # . #
                    . # . # .
                    . . # . .
                    `)
            }
            if (input.buttonIsPressed(Button.A) || (input.buttonIsPressed(Button.B) || input.buttonIsPressed(Button.AB))) {
                succes = false
                break;
            } else {
                basic.showIcon(IconNames.Happy)
            }
        }
    }
    if (succes == false) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Yes)
    }
}
basic.forever(function () {
    my_turn()
})
