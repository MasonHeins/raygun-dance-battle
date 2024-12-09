input.onButtonPressed(Button.A, function () {
    let black_floor = 0
    surface_reading = pins.analogReadPin(AnalogPin.P0)
    surface_reading = pins.analogReadPin(AnalogReadWritePin.P2)
    serial.writeLine("")
    // if for surface reading, ensure running on black floor only
    if (surface_reading >= black_floor - 100) {
        motobit.enable(MotorPower.On)
        for (let index = 0; index < 2; index++) {
            // show off clockwise
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 60)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 30)
            basic.pause(7200)
            // turn around
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 100)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
            basic.pause(500)
            // show off counter-clockwise
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 30)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 60)
            basic.pause(7200)
            pins.servoWritePin(AnalogPin.P16, 90)
            // Move towards crowd
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
            pins.servoWritePin(AnalogPin.P16, 180)
            basic.pause(1500)
            pins.servoWritePin(AnalogPin.P16, 90)
            // 1st spins, clockwise
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 75)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 75)
            pins.servoWritePin(AnalogPin.P16, 180)
            basic.pause(3000)
            pins.servoWritePin(AnalogPin.P16, 90)
            // 2nd spins, counter-clockwise
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 75)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 75)
            pins.servoWritePin(AnalogPin.P16, 180)
            basic.pause(3000)
            pins.servoWritePin(AnalogPin.P16, 90)
            // Backup to original position before spins
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 50)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 50)
            pins.servoWritePin(AnalogPin.P16, 180)
            basic.pause(1500)
            pins.servoWritePin(AnalogPin.P16, 90)
            // 3rd spins, counter-clockwise
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 75)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 75)
            pins.servoWritePin(AnalogPin.P16, 180)
            basic.pause(3000)
            pins.servoWritePin(AnalogPin.P16, 90)
            // move forward, slightly left
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 75)
            pins.servoWritePin(AnalogPin.P16, 180)
            basic.pause(1500)
            pins.servoWritePin(AnalogPin.P16, 90)
            // move back, slighly right
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 75)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 50)
            pins.servoWritePin(AnalogPin.P16, 180)
            basic.pause(1500)
            pins.servoWritePin(AnalogPin.P16, 90)
            // move forward, slightly left
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 50)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 75)
            pins.servoWritePin(AnalogPin.P16, 180)
            basic.pause(1500)
            pins.servoWritePin(AnalogPin.P16, 90)
            // move back, slightly right
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 75)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 50)
            pins.servoWritePin(AnalogPin.P16, 180)
            basic.pause(1500)
            pins.servoWritePin(AnalogPin.P16, 90)
            // 5th spin, counter-clockwise
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 75)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 75)
            pins.servoWritePin(AnalogPin.P16, 180)
            basic.pause(3000)
            pins.servoWritePin(AnalogPin.P16, 90)
            // 6th spin, clockwise
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 75)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 75)
            pins.servoWritePin(AnalogPin.P16, 180)
            basic.pause(3000)
            pins.servoWritePin(AnalogPin.P16, 90)
            // back to start
            motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 50)
            motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 50)
            pins.servoWritePin(AnalogPin.P16, 180)
        }
    } else {
        motobit.enable(MotorPower.Off)
    }
})
let surface_reading = 0
serial.redirectToUSB()
motobit.invert(Motor.Left, false)
motobit.invert(Motor.Right, true)
motobit.enable(MotorPower.Off)
basic.forever(function () {
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.Target)
})
