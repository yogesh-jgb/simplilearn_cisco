let promise1 =  new Promise( function (resolve, reject) {
    setTimeout( function (){
     resolve(' Promise resolved')
    }, 4000)
})
async function serverdata(){
    console.log(' we are into the server data function !!')
    let result = await promise1;
    console.log('after await .......')
    console.log(result);
    console.log("Completed !!!")
}
serverdata();