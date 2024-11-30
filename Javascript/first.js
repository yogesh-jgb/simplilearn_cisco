
function area(length, breadth) {
    return length * breadth;
}

const variable = () => 50;
const perimeter = () => 30;

function calculate(a, b = 20, c, d) {
    
    let length = 5; 
    let breadth = 4;
    
    b = b * area(length, breadth); 
    d = c + perimeter(); 

    return a + b + c + d;
}

console.log(calculate(20));             
console.log(calculate(40, 50, 70, 60)); 
console.log(calculate(40, 50));        