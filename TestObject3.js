const myObj = {name: "Shezan", age: 22,
                cars: [
                    {name: "BMW", model: ["320", "X3", "X5"]},
                    {name: "Mercedes", model: ["220", "X4", "X5"]},
                    {name: "Fiat", model: ["500", "panda"]}  
                ]
}

for (let i in myObj.cars) {
    console.log(i);
}

// x += " " + myObj.cars[i].name + " ";
//     for (let j in myObj.cars[i].model) {
//         x += myObj.cars[i].model[j];
//     }