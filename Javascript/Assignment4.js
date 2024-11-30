const promise1 = Promise.resolve("Hello");
const promise2 = Promise.resolve("You are learning");
const promise3 = Promise.resolve("Javascript");
const promise4 = Promise.reject("Bye");

async function printOutput() {
    try {
        const result3 = await promise3;
        console.log(result3); 

        const result1 = await promise1;
        console.log(result1); 

        const result2 = await promise2;
        console.log(result2); 
    } catch (error) {
        console.log("Error:", error);
    }
}

promise4.catch(error => {
    console.log("Handled rejection:", error);
});

printOutput();
