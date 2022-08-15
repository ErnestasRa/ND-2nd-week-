/* eslint-disable indent */
import Vehicle, { VehicleProps } from './vehicle.js';

export type AirVehicleProp = {
    maxAltitude: number
}

class AirVehicle extends Vehicle {
    private maxAltitude: number;

    constructor({ maxAltitude }: AirVehicle, vehicleProps: VehicleProps) {
        super(vehicleProps);
        this.maxAltitude = maxAltitude;
    }
}

export default AirVehicle;
