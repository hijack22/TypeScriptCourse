"use strict";
// const person: {
//     name: string;
//     age: number;
//     nickname: string;
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Max',
    age: 30,
    nickname: 'Big pp',
    hobbies: [35, 21, 12],
    role: Role.ADMIN
};
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobbies = _a[_i];
    // console.log(hobbies);
}
if (person.role === Role.AUTHOR) {
    console.log(person.hobbies);
}
