function filterByField(users,field){
    return users.filter(user => user[field]===true)
}
const users = [
{
username: "Yuri Gagarin",
lang: "ru",
isAstronaut: true,
},
{
username: "Nil Armstrong",
lang: "ENG",
isAstronaut: true,
},
{
username: "Elon Musk",
isAstronaut: false,
},
];
console.log(filterByField(users, "isAstronaut"))