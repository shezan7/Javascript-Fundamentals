//Callback function
/*
const status = true;

console.log('Task 1');

setTimeout(function() {
    if(status) {
        console.log('Task 2');
    }
    else {
        console.log('Task 2');
    }
}, 2000);

console.log('Task 3');
*/

const status = false;

console.log('Task 1');

//Promise define
const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        if(status) {
            resolve('Task 2')
        }
        else {
            reject('Failed!!!');
        }
    }, 2000);
});

//Promise call/execute
promise
    .then(function(value) {
        console.log(value);
    })
    .catch(function(err) {
        console.log(err);
    })

console.log('Task 3');