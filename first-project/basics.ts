function add(n1:number, n2 :number,p: boolean, resultPhrase: string)
{
    const results = n1 + n2;
    if(p)
    {
        console.log(n1+n2)
    }
   else{
    return  console.log(resultPhrase + results);
   }   
}

let number1 = 35;
const number2 = 10;
const printResult = false;
const resultPhrase = 'Result is: '


const result = add(number1,number2,printResult,resultPhrase);

