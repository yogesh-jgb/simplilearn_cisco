interface Professor {
    name: string;
    id: number;
    age: number;
    dept: string;
    salary: number;
    collegeName: string;
}
interface Student {
    name: string;
    id: number;
    age: number;
    stream: string;
    totalMarks: number;
    collegeName: string;
}
const professor1: Professor = {
    name: "Alok",
    id: 1,
    age: 40,
    dept: "Computer Science",
    salary: 80000,
    collegeName: "RGPV University"
};

const professor2: Professor = {
    name: "Vinay",
    id: 2,
    age: 30,
    dept: "Mathematics",
    salary: 85000,
    collegeName: "Oriental University"
};
const student1: Student = {
    name: "Varun",
    id: 101,
    age: 20,
    stream: "Computer Science",
    totalMarks: 450,
    collegeName: "RGPV University"
};
const student2: Student = {
    name: "Amit",
    id: 102,
    age: 21,
    stream: "Mathematics",
    totalMarks: 420,
    collegeName: "Oriental University"
};
console.log("Professors:", professor1, professor2);
console.log("Students:", student1, student2);