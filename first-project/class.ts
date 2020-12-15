class Department {
 
 //private id : string;
    //public is default and is accessible outside of class.
 // public  name: string;

//private is used when you want the object to be only used in the class.
// protected is like private, but you can use the object that extends the class Department 
protected employess: string[] = [];

 //Initilization of object properties in the class
 // readonly cannot write too or modifiy, only could read what the object stored.
 constructor( private readonly id : string, public name: string) {
    //this.id = id;
    //this.name = n;
   // this.employess = employess; 
}

 static createEmployee(name:string)
 {
     return {name:name};
 }
 describe(this: Department) {
     
    console.log(`Department:(${this.id}): ${this.name}`);
}
    
 addEmployee(employee: string)
 {
     this.employess.push(employee);
 }
    
 printEmployeeInfo()
 {
     console.log(this.employess.length);
     console.log(this.employess);
 }

}

//Inheritance of Department use extends method (only can inhert one class)
class ITDepartment extends Department
{
    constructor(id: string, public admins: string[]) {
        //have to add super if you are using the same parameters of the class you are inherting
        super(id,'IT');
        // if you want to use this keywords, you have to have super initlized first



    }

} 


class AccountingDepartment extends Department
{
    private lastReport: string;

    //getter allows you to get information from an private object that you can add complex logic too. ( always have to return something)
    get MostRecentReport() {
       
        if(this.lastReport){
        return this.lastReport;
        }
        throw new Error('No report found');
    }

    set mostRecentReport(value: string)
    {
        if(!value)
        {
            throw new Error('no Report was added');
            
        }
        
        this.AddReports(value);
    }

    constructor(id: string, private reports: string[]) {
        //have to add super if you are using the same parameters of the class you are inherting
        super(id,'Accounting');
        this.lastReport = reports[0];
        // if you want to use this keywords, you have to have super initlized first
    }

    addEmployee(name:string)
    {
        if(name === 'Max')
        {
            return;
        }
        this.employess.push(name);
    }
    
    AddReports(text: string)
    {
        this.reports.push(text);
        this.lastReport = text;
    }
    
    printReports()
    {
      //  console.log(this.reports);
    }
} 


const account = new Department('3','Accounting');

const employee1 = Department.createEmployee('Paul');

console.log(employee1);

const IT = new ITDepartment('D3',['Jake from State Farm']);

Math

const accounting = new AccountingDepartment('D1', ['The awesome report']);

accounting.mostRecentReport = 'Ding Dong';

accounting.addEmployee('Max');
accounting.addEmployee('Dr');
//accounting.printEmployeeInfo();

console.log(accounting.printReports);

//accounting.printReports();

IT.name = "Mcgregor";


// console.log(IT);

// account.addEmployee('Paul');
// account.addEmployee('Max');

// //account.employess[2] = 'Anna';

// account.describe();
// account.printEmployeeInfo();

//console.log(account);

//const accountingCopy = {name: 's', describe: account.describe};

//accountingCopy.describe();
