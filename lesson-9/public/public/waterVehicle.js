import Vehicle from './vehicle.js';
class WaterVehicle extends Vehicle {
    maxDepth;
    constructor(vehicleProps, { maxDepth }) {
        super(vehicleProps);
        this.maxDepth = maxDepth;
    }
}
export default WaterVehicle;
//# sourceMappingURL=waterVehicle.js.map