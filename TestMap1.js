const fruits = new Map();

fruits.set("apples", 400);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

console.log(fruits);

//fruits.get("apples");
//fruits.delete("apples");

let text = "";
fruits.forEach(function(value, key){
    text += key + value;
})
console.log(fruits);