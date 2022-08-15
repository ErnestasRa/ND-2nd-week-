import Vehicle from './vehicle.js';
class AirVehicle extends Vehicle {
    maxAltitude;
    constructor({ maxAltitude }, vehicleProps) {
        super(vehicleProps);
        this.maxAltitude = maxAltitude;
    }
}
export default AirVehicle;
//# sourceMappingURL=airVehicle.js.map