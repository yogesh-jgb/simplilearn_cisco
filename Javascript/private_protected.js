class CoffeMachine {
    #waterLimit = 200;  // private variable
    #fixWaterAmount(value){
        if(value < 0) return 0;
        if(value > this.#waterLimit && value <=250) return this.#waterLimit;
    }
    set water(value){
        this.#waterLimit = this.#fixWaterAmount(value)
    }
    get water(){
        return this.#waterLimit;
    }
    display(){
        return this.#fixWaterAmount(230);
    }
}
let c1 = new CoffeMachine();
c1.display();   // calling the private method #fixWaterAmount() method.
c1.water = 210;          // calling the setter method to set the private variable
console.log(c1.water)   // calling the getter method to return the private variable