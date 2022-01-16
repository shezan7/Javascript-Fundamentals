/*
function display(some){
    console.log(some);
}
function calculator(num1, num2){
    let sum = num1+num2;
    return sum;
}
let result = calculator(5,5);
display(result);
*/

/*
function display(some){
    console.log(some);
}
function calculator(num1, num2){
    let sum = num1+num2;
    display(sum); 
}
calculator(5,5);
*/

function display(some) {
    console.log(some);
}
function calculator(num1, num2, callback) {
    let sum = num1+num2;
    if(callback) callback(sum);
}
calculator(5, 7, display);



function display2(some) {
    console.log(some);
}
function calculator2(num1, num2, callback2) {
    let sum = num1+num2;
    if(callback2) callback2(sum);
    return sum;
}
const result = calculator2(5, 5, display2);
console.log(result);