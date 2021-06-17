let find = require("./plants.js");
let plants = [
	{id: 1, name: "first"},
	{id: 2, name: "second"},
	{id: 3, name: "third"},
];

const result = find(plants, 2);
console.log(result);