// function create<S,T>(v1:S , v2:T) : [S,T] {
//     return [v1,v2];
// }
// console.log(create<string,number>('Hari', 101));
// console.log(create<string,string>('Hari', 'Verma'));
// console.log(create<number,number>(100, 200));
// console.log(create<number,boolean>(100, true));
var PrintName = /** @class */ (function () {
    function PrintName(name, age) {
        this.name = name;
        this.age = age;
    }
    PrintName.prototype.setName = function (value) {
        this.value = value;
    };
    PrintName.prototype.getName = function () {
        return this.value;
    };
    PrintName.prototype.toString = function () {
        return this.name + ':' + this.value;
    };
    PrintName.prototype.display = function () {
        return 'the name is ' + this.name + ' and age is ' + this.age;
    };
    return PrintName;
}());
var value = new PrintName('Ravi', 35);
value.setName('HTML');
console.log(value.toString());
console.log(value.display());
