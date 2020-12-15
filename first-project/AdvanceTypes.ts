type Admin = {
    Name: string,
    privileges: string[];
};

type Employee = {
    Name: string;
    startDate: Date;
}

// Intersection Types can combined two types into one with an &.
type ElevatedEmployee = Admin & Employee;


const e1: ElevatedEmployee = {
    Name: 'Paul',
    privileges : ['create-server'],
    startDate: new Date()
};

type C = string | number;
type N = number | boolean;

// can use unions as well for intersection types.
type U = C & N;

//function overload
function add(N1: string, b: string): string;
function add(N1: C, b: C)
{
    if(typeof N1 === 'string' || b === 'string')
    {
        return N1.toString() + b.toString();
    }
    else if(typeof N1 === 'number' && b === 'number')
    {
        return N1 + b;
    }
}

   // const result = add('PP','dd');

    const fetchedUserData = {
        id: 'u1',
        nane: 'Paul',
        job: {title:'CEO',description: 'my own company' }
    };

    //optional chaining helps see if an property is avaiable by using ? to see if property is there or not.
    console.log(fetchedUserData?.job.title);

    const userinput = null;

    // double question mark will be used only if userinput comes back NULL or undefined and then we set a default value to storedData instead of NULL or undefined
    const storedData = userinput ?? 'Default';

    type UnknowEmployee = Employee | Admin;
    
    function printInfo(emp: UnknowEmployee)
    {
        console.log('Name ' + emp.Name);
        // use the IN on the object to find if privileges object is part of emp
        if('privileges' in emp)
        {
            console.log('Privileges: ' + emp.privileges); 
        }
        if('startDate' in emp)
        {
            console.log('startDate: ' + emp.startDate); 
        }
    }

printInfo(e1);

class Car {
    drive()
    {
        console.log('Driving..')
    }
}

class Truck {
    drive()
    {
        console.log('Driving a Truck....');
    }
    loadCargo(amount: number)
    {
        console.log('Loading cargo... ' + amount);
    }
}

type Vehicle = Car | Truck; 

const V1  =  new Car();
const V2 =  new Truck();

function useVehicle(vehicle: Vehicle)
{
    vehicle.drive();
    
    //Finds  loadCargo by using instanceof operator to see if loadCargo is in the Vehicle object
    if(vehicle instanceof Truck)
    {
        vehicle.loadCargo(1000);
    }
}
useVehicle(V1);
useVehicle(V2);


interface Bird {
    type :'bird';
    flying: number;
}

interface Horse 
{
    type: 'horse'; 
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal)
{    
let speed;
    
    //hardcoded type in each interface and used discriminated unions on type animal, which lets me do a switch statement to check if type is equal to what i am looking for.
    switch(animal.type)
    {
        case 'bird':
            speed = animal.flying;
            break;

        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed of ' + speed);
}

moveAnimal({type: 'horse', runningSpeed: 15});

//const paragraph = document.querySelector('p');
// can grab info from index by using document.getElementById, also ! mean that it will never return null;
const userElement = document.getElementById('user-input')! as HTMLInputElement;

if(userElement)
{
    // access HTMLInputElement before value by wrapping parathenesis around 
    (userElement as HTMLInputElement).value = 'Hi There'
}


interface ErrorContainer {
    // do not know what the property is or do not know how many properties are there but know they have to be strings 
    [prop: string] : string
    id : string;

}

const errorBag: ErrorContainer = {
    1: 'ffsdfsf',
    id: '23',
    2: 'fdfdf'
};