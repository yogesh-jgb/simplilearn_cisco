// function create<S,T>(v1:S , v2:T) : [S,T] {
//     return [v1,v2];
// }
// console.log(create<string,number>('Hari', 101));
// console.log(create<string,string>('Hari', 'Verma'));
// console.log(create<number,number>(100, 200));
// console.log(create<number,boolean>(100, true));
class PrintName<T,N>{
    private value: T | N | undefined;
    constructor(private name:string, private age: number)
    {
    }
    setName(value:T){
      this.value = value;
    }
    getName(): T | N | undefined{
      return this.value
    }
    toString(): string{
      return this.name + ':' + this.value;
    }
    display():string{
     return 'the name is ' + this.name + ' and age is ' + this.age;
    }
  }
  let value = new PrintName<string,number>('Ravi', 35);
  value.setName('HTML');
  console.log(value.toString());
  console.log(value.display());
  