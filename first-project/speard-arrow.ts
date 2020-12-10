// let userinput : unknown; 
// let username: string;

// userinput = 1; 
// userinput = 'phew phew';

// if(typeof userinput === 'string')
// {
//     username = userinput;
// }

// //never is used that function will NEVER return
// function generateError(message: string, code: number): never
// {
//     throw {message: message, errorCode: code };
// }

// console.log(generateError("ERROR ERROR BEEP BOP BOss", 12));


// const add = (a: number, b: number = 1) => {
//     return a+b
// };

// const printOutPut = (output : string | number) => {
//     console.log(output);
// };

// const button = document.querySelector('button');

// if(button)
// {
//     button.addEventListener('click', event => console.log(event));
// }

// printOutPut(add(5));


const hobbies = ['gym','baseball','ducking','eating'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies);


const person = {
    firstName: 'Max',
    age: 30
};

const copiedPerson = {...person};

const add = (...numbers:number[]) => {
    
   return numbers.reduce((curResult,curValue) => {
    return curResult + curValue;
   },0);
    
};

const addedNumbers = console.log(add(5,12,4,2,5,1,4,5,6,7,8,9));

const [hobby1,...remaininghobbies] = hobbies;

const {firstName, age} = person;