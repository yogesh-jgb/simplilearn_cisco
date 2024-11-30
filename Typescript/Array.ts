function arrayOpposite<T>( matrix : T[]): T[]{
    let empty: T[] = [];  // we are creating one empty array here
    for(let i= matrix.length-1 ; i>=0 ; i--)
    {
        empty.push(matrix[i]);
    }
    return empty;
}
let num = [45,23,90,12,67,39,92];
let r = arrayOpposite(num);
console.log(r);
let fruits = ['Apple','Banana','Pear','Cherry'];
let r1 = arrayOpposite(fruits);
console.log(r1);
