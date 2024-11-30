// enum ApprovalStatus {
//     submitted,
//     approved,
//     pending,
//     rejected,
//     in_progress
// };
// let request = {
//      id: 101,
//      status: ApprovalStatus.approved,
//      description : 'Please approve the request' 
// }
// console.log(`the mployee with id ${request.id} has the request got ${request.status}`)
// console.log(request.status)
//function
// function multiply(a:number, b:number, c?:number) // ? means that wehn we call the multiply function so we have c as optional
// {
//     if(typeof c !== 'undefined')
//     {
//         return a * b * c;
//     }
//     else{
//         return a * b;
//     }
// }
// let res = multiply(10,20,30);
// console.log(res);
// let res1 = multiply(40,50)
// console.log(res1);
//rest
function total(a, b) {
    var numbers = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        numbers[_i - 2] = arguments[_i];
    }
    var sum1 = 0;
    numbers.forEach(function (num) { return sum1 = sum1 + num + a + b; });
    return sum1;
}
var res = total(1, 2, 3, 4, 5, 6, 7, 8);
console.log(res);
var res1 = total(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11);
console.log(res1);
