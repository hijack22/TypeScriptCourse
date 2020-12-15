// Can add functions as interfaces
interface AddFn {
    (a: number, b:number): number;
}
//var is defined as interface
let add : AddFn;

//Intilizae add function returns results of a + b
add = (a:number,b:number) => 
{
    return a + b;
}

interface Name {
    readonly name: string;
    //? is telling typescript this property is opitional and might exisit
    outPutName?: string;
}
 


// can set objects in interface to readonly, so that after inlization of objects, they cannot change to something else
// Interfaces can extend other Interfaces
interface Greetable extends Name{
    readonly age: number;
    greet(phrase: string): void;
}

//use Implements to implement interface to class
class Person implements Greetable , Name {
    name: string;
    outPutName?: string;
    age: number;

    constructor(n: string, a: number, outPutName?: string)
    {
        if(outPutName)
        {
            this.outPutName = outPutName;
        }
        this.name = n;
        this.age = a;
    }

    greet(phrase:string){
       if(!this.outPutName)
       {
        console.log(phrase + ' ' + this.name + ' My age is: ' + this.age);
       }
       else
       {
           console.log('See it worked');
       }
    }

} 
//Can use person to a variable
let user1: Greetable

//has to be an object if initliazed as a interface
user1 =  new Person('Dock',32);

user1.greet('ello');