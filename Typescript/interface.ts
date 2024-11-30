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

// interface Person{
//     firstname: string;
//     lastname: string;
//     sayHi: () => string;
// }
// let customer : Person = {
//     firstname: "Tarun",
//     lastname: "Verma",
//     sayHi: () : string => {return "Hey you are new customer here !!"}
// }
// console.log(customer.firstname)
// console.log(customer.lastname)
// console.log(customer.sayHi())
// let employee : Person = {
//     firstname: "Kavita",
//     lastname: "Agarwal",
//     sayHi: () : string => {return "Welcome to office !!"}
// }
// console.log(employee.firstname)
// console.log(employee.lastname)
// console.log(employee.sayHi())


///////////////////////////////////

// interface BusinessPartner {
//     name: string;
//     credit: number;
// }
// interface Identity{
//     id: number;
//     city: string;
// }
// interface Contact{
//     email: string;
//     phone: number;
// }
// type Employee1 = Identity & Contact; 
// type Customer = Contact & BusinessPartner;
// let e : Employee1 = {
//     id: 101,
//     city: 'Delhi',
//     email : 'admin@gmail.com',
//     phone: 834383
// }
// let c : Customer = {
//     name: 'Rahul',
//     credit: 5656,
//     email : 'admin@gmail.com',
//     phone: 834383
// }
// console.log(e.id + ' ' + e.city + ' ' + e.email + ' '+ e.phone)
// console.log(c.name + ' ' + c.credit + ' ' + c.email + ' '+ c.phone)

//////////////////////////////

//------------type Guard------------------// 
type alpha = string | number;
let x: unknown = "35";
let y : unknown = 34;
console.log((x as string));
console.log((x as string).length);
console.log( (<string> x).length)
console.log( (<string> y).length)
console.log( (y as string + " Bye").concat(' See you tomorrow !!'))



////////////////////////////////////////