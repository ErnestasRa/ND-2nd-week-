import Vehicle from './vehicle.js';
class LandVehicle extends Vehicle {
    tires;
    constructor({ tires }, vehicleProps) {
        super(vehicleProps);
        this.tires = tires;
    }
}
export default LandVehicle;
//# sourceMappingURL=landVehicle.js.map