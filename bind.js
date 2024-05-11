const person1 = {
    name: "uvais",
    age: 26,
    printNameAndAge: function(location) {
        return `Name is ${this.name} and age is ${this.age} and location is ${location}`;
    }
}

console.log(person1.printNameAndAge("nashik"));

const person2 = {
    name: "bruce wayne",
    age: 33,
}

// Now inorder to use printNameAndAge method to print details of object2, we can use bind Method.

const person2PrintFn = person1.printNameAndAge.bind(person2);

console.log(person2PrintFn('Gotham'));




