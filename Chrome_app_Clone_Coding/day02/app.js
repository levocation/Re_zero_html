const player = {
    name: "nico",
    points: 10,
    sayHello: function (playerName) {
        console.log(playerName + " Hello!");
    }
};
// Object

console.log(player.name);
// "nico"

player.sayHello("asdf");
// asdf Hello!

// exam
const calculator = {
    add: function (a, b) {
        console.log(a + b);
    },
    subtract: function (a, b) {
        console.log(a - b);
    },
    multiply: function (a, b) {
        console.log(a * b);
    },
    divide: function (a, b) {
        console.log(a / b);
    },
    power: function (a, b) {
        console.log(a ** b);
    }
}