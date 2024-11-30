const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);
const p4 = Promise.reject(40);
const p5 = Promise.resolve(50);
const p6 = Promise.reject(60);

Promise.all([p5, p2, p3, p1, p6, p4])
    .then((values) => {
        console.log("Resolved values with .all:", values);
    })
    .catch((error) => {
        console.log("Rejected with .all:", error);
    });

Promise.race([p5, p2, p3, p1, p6, p4])
    .then((value) => {
        console.log("First resolved/rejected value with .race:", value);
    })
    .catch((error) => {
        console.log("First rejected with .race:", error); 
    });


Promise.any([p5, p2, p3, p1, p6, p4])
    .then((value) => {
        console.log("First resolved value with .any:", value);
    })
    .catch((error) => {
        console.log("All promises rejected with .any:", error);
    });

Promise.all([p5, p2, p3, p1, p6, p4])
    .then((values) => {
        console.log("Resolved values with .all and .catch:", values);
    })
    .catch((error) => {
        console.log("Rejected with .all and .catch:", error);
    });