/* eslint-disable indent */
import AirVehicle from './airVehicle.js';
import WaterVehicle from './waterVehicle.js';
import LandVehicle from './landVehicle.js';

const newVehicles: (AirVehicle | LandVehicle | WaterVehicle)[] = [
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
        maxDepth: 5000
    }, {
        brand: 'skuba',
        model: 'diver',
        year: 1998,
    }),

];

newVehicles.forEach((vehicle) => console.log(vehicle.getString()));
