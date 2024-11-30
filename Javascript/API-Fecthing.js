let success = true;
function getProducts(){
    return new Promise((resolve,reject) => {
    setTimeout( () => {
        if(success)
        {
            resolve( [
                {id: 101, name: 'watch', brand :'Titan'},
                {id: 102, name: 'shirt', brand :'RJ'},
                {id: 103, name: 'Jeans', brand :'Levis'},
                {id: 104, name: 'LED', brand :'Samsung'}
            ])
        }
        else{
            reject(" Failed to fetch the data coming from the API server ..... ")
        }
    }, 3000);
    })
}
let promise = getProducts();
promise
.then((products) => {
    console.log(products);
})
.catch((error) =>{
    console.log(error)
})
.finally( () =>{
    console.log(" This is my finally block >>> ")
})
