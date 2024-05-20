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


Function.prototype.myBind = function (context, ...args) {
    // check if it is called on function
    if (typeof this !== 'function') {
        throw new Error("it must be called on the function");
    }

    // Attach a new key to the new object.
    context.newFn = this;
    return function (...newArgs) {
        return context.newFn(...args, ...newArgs);
    }
}


const person2PrintFn = person1.printNameAndAge.myBind(person2, "delhi");
person2PrintFn("Gotham");