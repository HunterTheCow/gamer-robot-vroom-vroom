function backward () {
    wuKong.setAllMotor(-20, -20)
}
function arm_up () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
}
function forward () {
    wuKong.setAllMotor(20, 20)
}
function arm_down () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
}
joystickbit.initJoystickBit()
radio.setGroup(30)
basic.showLeds(`
    . . . . .
    . # # # .
    # # # . #
    . # # # .
    . # . # .
    `)
