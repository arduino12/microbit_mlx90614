/**
 * makecode micro:bit extension for MLX90614 IR thermometer.
 */

enum MLX90614_TEMPERATURE_ORIGIN {
    //% block="object"
    OBJECT = 0x07,
    //% block="ambient"
    AMBIENT = 0x06,
}

/**
 * MLX90614 block
 */
//% weight=100 color=#ff7d30 icon="\uf2c7" block="MLX90614"
namespace MLX90614 {
    let MLX90614_I2C_ADDR = 0x5A

    function read_reg_uint16(reg: number): number {
        pins.i2cWriteNumber(MLX90614_I2C_ADDR, reg, NumberFormat.UInt8BE, false);
        return pins.i2cReadNumber(MLX90614_I2C_ADDR, NumberFormat.UInt16LE);
    }

    /**
     * temperature
     */
    //% blockId="MLX90614_TEMPERATURE" block="%temperature_origin temperature (°C)"
    //% weight=80 blockGap=8
    export function temperature(temperature_origin: MLX90614_TEMPERATURE_ORIGIN): number {
        let t = read_reg_uint16(temperature_origin);
		return t * 0.02 - 273.15;
    }
}
