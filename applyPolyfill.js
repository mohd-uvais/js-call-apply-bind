const person1 = {
    name: "uvais",
    age: 26,
    printNameAndAge: function(location) {
        console.log(`Name is ${this.name} and age is ${this.age} and location is ${location}`);
    }
}

// console.log(person1.printNameAndAge("nashik"));

const person2 = {
    name: "bruce wayne",
    age: 33,
}


Function.prototype.myApply = function (context, args) {
    // check if it is called on function
    if (typeof this !== 'function') {
        throw new Error("it must be called on the function");
    }

    // Attach a new key to the new object and then call it using params.
    context.newFn = this;
    context.newFn(...args);
}


person1.printNameAndAge.myApply(person2, ["Gotham"]);