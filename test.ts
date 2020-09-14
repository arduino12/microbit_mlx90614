let temperature = 0
basic.forever(() => {
    temperature = MLX90614.temperature(MLX90614_TEMPERATURE_ORIGIN.OBJECT)
    serial.writeNumber(temperature)
    serial.writeLine("°C")
    basic.pause(100)
})
