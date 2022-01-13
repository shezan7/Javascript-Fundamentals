const car = {
    name: "fiat",
    model: 500,
    weight: "850 kg",
    color: "white",
    start: function(){
        this.drive();
        console.log("Car has started")
    },
    drive: function(){
        console.log("Car is driving")
    },
};

console.log(car.weight);
console.log(car["model"]);
car.start();