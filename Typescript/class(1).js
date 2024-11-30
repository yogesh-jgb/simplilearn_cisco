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
// class Employee{
//     private id:number;     // class variable which is empty and un-iniltiazed
//     private firstname:string;
//     private lastname:string;
//     dept:string;          // public in nature
//     readonly dob:Date;    // this value cant be changed
//     constructor(id:number, firstname:string, lastname:string, dept:string, dob:Date)
//     {
//         this.id = id;
//         this.firstname = firstname;
//         this.lastname = lastname;
//         this.dept = dept;
//         this.dob= dob;
//     }
//     getFullName(){
//         console.log('yur name is ' + this.firstname + ' ' + this.lastname);
//     }
//     getId(){
//         console.log('your id is ' + this.id);
//     }
//     getDOB(){
//         console.log('your dob year is ' + this.dob.getFullYear());
//     }
// }
// let p1 = new Employee(101,'Ravi','Sharma','IT', new Date(1990,9,23));
// p1.getDOB();
// p1.getFullName();
// p1.getId();
var Employee = /** @class */ (function () {
    function Employee(id, firstname, lastname, dept, dob) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.dept = dept;
        this.dob = dob;
    }
    Employee.prototype.getFullName = function () {
        console.log('yur name is ' + this.firstname + ' ' + this.lastname);
    };
    Employee.prototype.getId = function () {
        console.log('your id is ' + this.id);
    };
    Employee.prototype.getDOB = function () {
        console.log('your dob year is ' + this.dob.getFullYear());
    };
    Employee.prototype.describe = function () {
        return ' the last name is ' + this.lastname;
    };
    return Employee;
}());
var TempEmployee = /** @class */ (function (_super) {
    __extends(TempEmployee, _super);
    function TempEmployee(id, firstname, lastname, dept, dob, jobTitle) {
        var _this = _super.call(this, id, firstname, lastname, dept, dob) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    TempEmployee.prototype.getJobTitle = function () {
        console.log('your job title is ' + this.jobTitle);
    };
    TempEmployee.prototype.describe = function () {
        return _super.prototype.describe.call(this) + ' and the job title is ' + this.jobTitle;
    };
    return TempEmployee;
}(Employee));
var p1 = new TempEmployee(101, 'Ravi', 'Sharma', 'IT', new Date(1990, 9, 23), 'Tech Lead');
p1.getDOB();
p1.getFullName();
p1.getId();
p1.describe();
p1.getJobTitle();
