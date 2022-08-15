class Vehicle {
    brand;
    model;
    year;
    constructor({ brand, model, year }) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getString = () => `${this.brand}, ${this.model}, ${this.year}`;
}
export default Vehicle;
//# sourceMappingURL=vehicle.js.map