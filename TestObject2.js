const person = {
    name: 'Shezan',
    id: "akhsfklsdhf",
    age: 23,
    getName: function(){
        return 'Shezan';
    }
};

    /*
    const person2 = person;
    person2.age = 26;
    */

//add new property
person.country = 'Bangladesh';

console.log(person);

console.log(person.age);

//delete
delete person.id;
console.log(person);

//for in loop
const person2 = {
    firstName: "Shezan ",
    lastName: "Al-Mahmud ",
    age: 22
};
let text = "";
for (let x in person2){
    text += person2[x];
}
console.log(text);