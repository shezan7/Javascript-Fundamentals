const person = {firstName: "Shezan", lastName: "Al-Mahmud", id: 1023,
                fullName: function(){
                    return this.firstName + " " + this.lastName;
                }
};
console.log(person.fullName());

const person2 = {firstName: "Cristiano", lastName: "Ronaldo", id: 0007};

person2.fullName = function(){
    return this.firstName + " " + this.lastName;
}
console.log(person2.fullName());