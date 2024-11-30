var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(name, capacity) {
        if (capacity === void 0) { capacity = Vehicle.defaultCapacity; }
        this.name = name;
        this.capacity = capacity;
    }
    Vehicle.prototype.startEngine = function () {
        console.log("".concat(this.name, " is starting with a capacity of ").concat(this.capacity));
    };
    Vehicle.prototype.stopEngine = function () {
        console.log("".concat(this.name, " is stopping."));
    };
    Vehicle.prototype.run = function () {
        console.log("".concat(this.name, " is running."));
    };
    Vehicle.prototype.brake = function () {
        console.log("".concat(this.name, " is braking."));
    };
    Vehicle.callCapacity = function () {
        console.log("We are calling static method with capacity ".concat(Vehicle.defaultCapacity));
    };
    Vehicle.defaultCapacity = 4000;
    return Vehicle;
}());
var TwoWheeler = /** @class */ (function (_super) {
    __extends(TwoWheeler, _super);
    function TwoWheeler(name, capacity, tyre, engine) {
        if (tyre === void 0) { tyre = 2; }
        if (engine === void 0) { engine = 3000; }
        var _this = _super.call(this, name, capacity) || this;
        _this.tyre = tyre;
        _this.engine = engine;
        return _this;
    }
    TwoWheeler.prototype.printDetails = function () {
        console.log("Name: ".concat(this.name, ", Capacity: ").concat(this.capacity, ", Tyre: ").concat(this.tyre, ", Engine: ").concat(this.engine));
        this.startEngine();
        this.stopEngine();
        this.run();
        this.brake();
        Vehicle.callCapacity();
    };
    return TwoWheeler;
}(Vehicle));
var ThreeWheeler = /** @class */ (function (_super) {
    __extends(ThreeWheeler, _super);
    function ThreeWheeler(name, capacity, tyre, engine) {
        if (tyre === void 0) { tyre = 3; }
        if (engine === void 0) { engine = 6000; }
        var _this = _super.call(this, name, capacity) || this;
        _this.tyre = tyre;
        _this.engine = engine;
        return _this;
    }
    ThreeWheeler.prototype.printDetails = function () {
        console.log("Name: ".concat(this.name, ", Capacity: ").concat(this.capacity, ", Tyre: ").concat(this.tyre, ", Engine: ").concat(this.engine));
        this.startEngine();
        this.stopEngine();
        this.run();
        this.brake();
        Vehicle.callCapacity();
    };
    return ThreeWheeler;
}(Vehicle));
var bike = new TwoWheeler("Bike", 4000);
bike.printDetails();
var auto = new ThreeWheeler("Auto", 4000);
auto.printDetails();
