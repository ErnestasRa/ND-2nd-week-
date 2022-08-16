/* eslint-disable indent */
import Vehicle, { VehicleProps } from './vehicle.js';

export type WaterVehicleProps = {
    maxDepth: number
}

class WaterVehicle extends Vehicle {
    private maxDepth: number;

    constructor( { maxDepth }: WaterVehicleProps,vehicleProps: VehicleProps) {
        super(vehicleProps);
        this.maxDepth = maxDepth;
    }
}

export default WaterVehicle;
