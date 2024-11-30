function area(callback) {
    callback(multiple);
}

function add(multiplyFunction) {
    let a = 5;
    let b = 10;
    console.log("The product is:", multiplyFunction(a, b));
}

function multiple(a, b) {
    return a * b;
}

setTimeout(area, 3000, add)