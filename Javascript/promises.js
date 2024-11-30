let age=20;
let check = new Promise(function(resolve,reject){
    if(age >= 18)
    {
        resolve("The person is elgible to vote")
    }
    else{
        reject("The person cant vote")
    }
})
check
  .then(function successValue(result){
    console.log(result)
  })
  .then(function successValue2(){
    console.log("after vote the person can go home")
  })
  .catch(function errorValue(result){
    console.log(result);
  })