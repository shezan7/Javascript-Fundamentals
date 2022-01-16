const status = false;
console.log("Task 1");
setTimeout(function(){
    if(status){
        console.log("Task 2");
    }
    else {
        console.log("Task 2 failed");
    }
}, 2000);
console.log("Task 3");
