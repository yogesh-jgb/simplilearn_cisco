// interface Mail{
//     send(email:string): boolean;
//     queue(email:string): boolean;
// }
// interface NewMail extends Mail{
//     receive(email:string): boolean
// }
// class Demo implements NewMail{
//     send(email:string): boolean{
//         console.log('send email from this email '+ email);
//         return true;
//     }
//     queue(email:string): boolean{
//         console.log('this email is queued inside the list with the id'+ email);
//         return true;
//     }
//     receive(email:string): boolean{
//         console.log('email is received from this id '+ email);
//         return true;
//     }
// }
// let r = new Demo();
// r.queue('admin@gmail.com');
// r.receive('admin@gmail.com');
// r.send('admin@gmail.com');

var customer = {
    firstname: "Tarun",
    lastname: "Verma",
    sayHi: function () { return "Hey you are new customer here !!"; }
};
console.log(customer.firstname);
console.log(customer.lastname);
console.log(customer.sayHi());
var employee = {
    firstname: "Kavita",
    lastname: "Agarwal",
    sayHi: function () { return "Welcome to office !!"; }
};
console.log(employee.firstname);
console.log(employee.lastname);
console.log(employee.sayHi());
