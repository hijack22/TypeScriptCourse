//Type Aliases
type combinable = number | string;
type conversion = 'as-number' | 'as-text'

function add(n1:combinable, n2 :combinable, resultConversion : conversion)
{    
    let results;
    if(typeof n1 === 'number' && typeof n2 === 'number' || resultConversion == 'as-number')
    {
        //conversion to number using + sign 
        results = +n1 + +n2;
    }
    else{
        results = n1.toString() + n2.toString();
     }  
       return results;
     // if( resultConversion === 'as-number')
    // {
    //     return +results;

    // } else{
    //     return results.toString();
    
    // }
}
const addNumbers = add(20,15,'as-number');
console.log(addNumbers);

const combineString = add('30','20','as-number');
console.log(combineString)

const AddNames = add('Paul','PP', 'as-text');

console.log(AddNames);
