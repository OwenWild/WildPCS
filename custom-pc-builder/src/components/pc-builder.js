class PCBuilder {
    constructor() {
        this.components = {
            cpu: null,
            gpu: null,
            ram: null,
            storage: null,
            motherboard: null,
            powerSupply: null,
            case: null,
        };
        this.prices = {
            cpu: 0,
            gpu: 0,
            ram: 0,
            storage: 0,
            motherboard: 0,
            powerSupply: 0,
            case: 0,
        };
    }

    addComponent(type, component, price) {
        if (this.components[type] !== undefined) {
            this.components[type] = component;
            this.prices[type] = price;
        } else {
            console.error('Invalid component type');
        }
    }

    calculateTotalCost() {
        return Object.values(this.prices).reduce((total, price) => total + price, 0);
    }

    renderConfiguration() {
        const configuration = {
            components: this.components,
            totalCost: this.calculateTotalCost(),
        };
        console.log('PC Configuration:', configuration);
        return configuration;
    }
}

export default PCBuilder;