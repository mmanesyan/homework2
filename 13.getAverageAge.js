
const users = [
{
username: "Yuri Gagarin",
lang: "ru",
age: 56,
},
{
username: "Nil Armstrong",
lang: "ENG",
age: 54,
},
];
function getAverageAge(users){
    let total= users.reduce((previous,current) => previous+current.age,0)
    let averageAge=Math.floor((total/users.length))
    return averageAge
  }
console.log(getAverageAge(users))