/* eslint-disable indent */
import Vehicle, { VehicleProps } from './vehicle.js';

export type LandVehicleProps = {
    tires: string[]
}

class LandVehicle extends Vehicle {
    private tires: string[];

    constructor({ tires }: LandVehicleProps, vehicleProps: VehicleProps) {
        super(vehicleProps);
        this.tires = tires;
    }
}

export default LandVehicle;
