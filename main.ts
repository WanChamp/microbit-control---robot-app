bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Happy)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    receivedString = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (receivedString == "up") {
        sensors.DDMmotor(
        AnalogPin.P13,
        0,
        AnalogPin.P14,
        255
        )
        sensors.DDMmotor(
        AnalogPin.P15,
        1,
        AnalogPin.P16,
        255
        )
    }
    if (receivedString == "down") {
        sensors.DDMmotor(
        AnalogPin.P13,
        1,
        AnalogPin.P14,
        255
        )
        sensors.DDMmotor(
        AnalogPin.P15,
        0,
        AnalogPin.P16,
        255
        )
    }
    if (receivedString == "right") {
        sensors.DDMmotor(
        AnalogPin.P13,
        0,
        AnalogPin.P14,
        100
        )
        sensors.DDMmotor(
        AnalogPin.P15,
        0,
        AnalogPin.P16,
        100
        )
    }
    if (receivedString == "left") {
        sensors.DDMmotor(
        AnalogPin.P13,
        1,
        AnalogPin.P14,
        100
        )
        sensors.DDMmotor(
        AnalogPin.P15,
        1,
        AnalogPin.P16,
        100
        )
    }
    if (receivedString == "stop") {
        sensors.DDMmotor(
        AnalogPin.P13,
        0,
        AnalogPin.P14,
        0
        )
        sensors.DDMmotor(
        AnalogPin.P15,
        0,
        AnalogPin.P16,
        0
        )
    }
})
let receivedString = ""
bluetooth.startUartService()
basic.showIcon(IconNames.Asleep)
