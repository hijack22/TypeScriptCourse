function add(n1: number, n2: number): number
{
    return n1 + n2;
}

function printResult(num: number): void
{
    console.log('Result ' + num);
}

function addandHandle(a:number, b:number, cb : (num: number) => void)
{
    const result = a + b;
    cb(result);
}

let combinedvalues:(a:number,b:number) => number;

combinedvalues = add;

console.log(combinedvalues(5,12));

addandHandle(12,13,(result)=>{
console.log(result);
});

