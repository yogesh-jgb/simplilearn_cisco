class Vehicle {
    name: string;
    capacity: number;
    private static readonly defaultCapacity = 4000;

    constructor(name: string, capacity: number = Vehicle.defaultCapacity) {
        this.name = name;
        this.capacity = capacity;
    }

    startEngine(): void {
        console.log(`${this.name} is starting with a capacity of ${this.capacity}`);
    }

    stopEngine(): void {
        console.log(`${this.name} is stopping.`);
    }

    run(): void {
        console.log(`${this.name} is running.`);
    }

    brake(): void {
        console.log(`${this.name} is braking.`);
    }

    static callCapacity(): void {
        console.log(`We are calling static method with capacity ${Vehicle.defaultCapacity}`);
    }
}

class TwoWheeler extends Vehicle {
    private tyre: number;
    private engine: number;

    constructor(name: string, capacity: number, tyre: number = 2, engine: number = 3000) {
        super(name, capacity);
        this.tyre = tyre;
        this.engine = engine;
    }

    printDetails(): void {
        console.log(`Name: ${this.name}, Capacity: ${this.capacity}, Tyre: ${this.tyre}, Engine: ${this.engine}`);
        this.startEngine();
        this.stopEngine();
        this.run();
        this.brake();
        Vehicle.callCapacity();
    }
}

class ThreeWheeler extends Vehicle {
    private tyre: number;
    private engine: number;

    constructor(name: string, capacity: number, tyre: number = 3, engine: number = 6000) {
        super(name, capacity);
        this.tyre = tyre;
        this.engine = engine;
    }

    printDetails(): void {
        console.log(`Name: ${this.name}, Capacity: ${this.capacity}, Tyre: ${this.tyre}, Engine: ${this.engine}`);
        this.startEngine();
        this.stopEngine();
        this.run();
        this.brake();
        Vehicle.callCapacity();
    }
}

const bike = new TwoWheeler("Bike", 4000);
bike.printDetails();

const auto = new ThreeWheeler("Auto", 4000);
auto.printDetails();