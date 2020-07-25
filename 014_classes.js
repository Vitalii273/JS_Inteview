class emp {
    constructor(n, a) {
        this.n = n;
        this.a = a;
    }
}

class r extends emp {
    constructor(n, a, s, adr) {
        super(n, a);
        this.s = s;
        this.adr = adr;
    }
    toString() {
        console.log(this.n + this.a + this.s + this.adr);
    }
}
//-------------------------

// Make a parent class
function Person() {}
// with an instance method
Person.prototype.greet = function greet() {
    console.log("Hello");
}
// and a class method.
Person.create = function create() {
    return new this();
};

// Create a subclass
function Dave() {}
Dave.__proto__ = Person;
Dave.prototype.__proto__ = Person.prototype;
// and test it.
console.log(Dave.create());
console.log(new Dave);
Dave.create().greet();