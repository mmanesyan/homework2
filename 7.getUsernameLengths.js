function getUsernameLengths(users){
    return users.map(user => user.username.length);
}
const users = [
{
username: "Yuri Gagarin",
lang: "ru",
},
{
username: "Nil Armstrong",
lang: "ENG",
},
];
console.log(getUsernameLengths(users))