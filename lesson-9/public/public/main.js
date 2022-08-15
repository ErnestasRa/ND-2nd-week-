import AirVehicle from './airVehicle.js';
import WaterVehicle from './waterVehicle.js';
import LandVehicle from './landVehicle.js';
const newVehicles = [
    new AirVehicle({
        maxAltitude: 5000,
    }, {
        brand: 'Boeying',
        model: 'Keleivinis',
        year: 2002,
    }),
    new LandVehicle({
        tires: ['Continental', 'Dunlop'],
    }, {
        brand: 'bmw',
        model: '325',
        year: 2007,
    }),
    new WaterVehicle({
        brand: 'skuba',
        model: 'diver',
        year: 1998,
    }, {
        maxDepth: 3000,
    }),
];
newVehicles.forEach((vehicle) => console.log(vehicle.getString()));
//# sourceMappingURL=main.js.map