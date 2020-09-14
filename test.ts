let temperature = 0
basic.forever(() => {
    temperature = MLX90614.temperature()
    serial.writeNumber(temperature)
    serial.writeLine("C.")
    basic.pause(1000)
})
