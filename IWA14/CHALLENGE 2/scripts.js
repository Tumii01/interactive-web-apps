const add = (a, b) => a + b;

const multiply = (a, b) => a * b;

const internal = function() {
const added = add(this.internal.a, this.internal.b);
const multiplied = multiply(this.internal.a, this.internal.b);
return [added, multiplied];
}


// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

console.log(example1.calculate()[0] * example1.internal.c);
console.log(example2.calculate()[1] * example2.internal.c);


