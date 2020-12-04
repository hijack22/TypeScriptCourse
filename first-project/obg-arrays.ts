// const person: {
//     name: string;
//     age: number;
//     nickname: string;
// }

    enum Role {ADMIN, READ_ONLY,AUTHOR};

    const person = {
    name: 'Max',
    age : 30, 
    nickname: 'Big pp',
    hobbies: [35,21,12],
    role: Role.ADMIN 
}; 


for( const hobbies of person.hobbies)
{
   // console.log(hobbies);
}


if(person.role === Role.AUTHOR )
{
    console.log (person.hobbies);
}


