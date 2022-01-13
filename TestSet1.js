const mySet = new Set();

mySet.add("a");
mySet.add("b");
mySet.add("c");

console.log(mySet);


const letters = new Set(["a", "b", "c"]);

let text = "";
letters.forEach(function(value){
    text += value;
})
console.log(text);