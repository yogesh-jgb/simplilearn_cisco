function arrayOpposite(matrix) {
    var empty = []; // we are creating one empty array here
    for (var i = matrix.length - 1; i >= 0; i--) {
        empty.push(matrix[i]);
    }
    return empty;
}
var num = [45, 23, 90, 12, 67, 39, 92];
var r = arrayOpposite(num);
console.log(r);
var fruits = ['Apple', 'Banana', 'Pear', 'Cherry'];
var r1 = arrayOpposite(fruits);
console.log(r1);
