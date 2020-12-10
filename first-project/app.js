var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    //Initilization of object properties in the class
    // readonly cannot write too or modifiy, only could read what the object stored.
    function Department(id, name) {
        this.id = id;
        this.name = name;
        //private id : string;
        //public is default and is accessible outside of class.
        // public  name: string;
        //private is used when you want the object to be only used in the class.
        // protected is like private, but you can use the object that extends the class Department 
        this.employess = [];
        //this.id = id;
        //this.name = n;
        // this.employess = employess; 
    }
    Department.prototype.describe = function () {
        console.log("Department:(" + this.id + "): " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employess.push(employee);
    };
    Department.prototype.printEmployeeInfo = function () {
        console.log(this.employess.length);
        console.log(this.employess);
    };
    return Department;
}());
//Inheritance of Department use extends method (only can inhert one class)
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = 
        //have to add super if you are using the same parameters of the class you are inherting
        _super.call(this, id, 'IT') || this;
        _this.admins = admins;
        return _this;
        // if you want to use this keywords, you have to have super initlized first
    }
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = 
        //have to add super if you are using the same parameters of the class you are inherting
        _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
        // if you want to use this keywords, you have to have super initlized first
    }
    Object.defineProperty(AccountingDepartment.prototype, "MostRecentReport", {
        //getter allows you to get information from an private object that you can add complex logic too. ( always have to return something)
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            throw new Error('No report found');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        set: function (value) {
            if (!value) {
                throw new Error('no Report was added');
            }
            this.AddReports(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.addEmployee = function (name) {
        if (name === 'Max') {
            return;
        }
        this.employess.push(name);
    };
    AccountingDepartment.prototype.AddReports = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var account = new Department('3', 'Accounting');
var IT = new ITDepartment('D3', ['Jake from State Farm']);
var accounting = new AccountingDepartment('D1', ['The awesome report']);
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
