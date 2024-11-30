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
class Employee{
    private id:number;     // class variable which is empty and un-iniltiazed
    private firstname:string;
    private lastname:string;
    dept:string;          // public in nature
    readonly dob:Date;    // this value cant be changed
    constructor(id:number, firstname:string, lastname:string, dept:string, dob:Date)
    {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.dept = dept;
        this.dob= dob;
    }
    getFullName(){
        console.log('yur name is ' + this.firstname + ' ' + this.lastname);
    }

getId(){
        console.log('your id is ' + this.id);
    }
    getDOB(){
        console.log('your dob year is ' + this.dob.getFullYear());
    }
    describe():string
    {
      return ' the last name is ' + this.lastname;
    }
}
class TempEmployee extends Employee{
    private jobTitle:string;
    constructor(id:number, firstname:string, lastname:string, dept:string, dob:Date, jobTitle:string)
    {
        super(id,firstname,lastname,dept,dob)
        this.jobTitle= jobTitle;
    }
    getJobTitle(){
        console.log('your job title is ' + this.jobTitle);
    }
describe():string
    {
      return  super.describe() + ' and the job title is ' + this.jobTitle;
    }
}
let p1 = new TempEmployee(101,'Ravi','Sharma','IT', new Date(1990,9,23),'Tech Lead');
p1.getDOB();
p1.getFullName();
p1.getId();
p1.describe();
p1.getJobTitle();