function add(n1:number | string, n2 :number | string)
{    
    let results;
    if(typeof n1 === 'number' && typeof n2 === 'number')
    {
         results = n1 + n2;
    }
    else{
        results = n1.toString() + n2.toString();
        
    }  
    return results;
}

const AddNumbers = add(1,2);
const AddNames = add("Paul","PP");

console.log(AddNames);
console.log(AddNumbers);