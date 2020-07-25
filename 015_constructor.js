// Classic constructor
function Rectangle(width, height) {
    this.width = width;
    this.height = height;
}

Rectangle.prototype.getArea = function getArea() {
    return this.width * this.height;
};
Rectangle.prototype.getPerimeter = function getPerimeter() {
    return 2 * (this.width + this.height);
};
Rectangle.prototype.toString = function toString() {
    return this.constructor.name + " a=" + this.getArea() + " p=" + this.getPerimeter();
};

//--------------------

function Square(side) {
    this.width = side;
    this.height = side;
}

// Make Square inherit from Rectangle
Square.prototype = Object.create(Rectangle.prototype, {constructor: {value: Square}});
// Override a method
Square.prototype.getPerimeter = function getPerimeter() {
    return this.width * 4;
};

// var rect = new Rectangle(6, 4);
// var sqr = new Square(5);
// console.log(rect.toString())
// console.log(sqr.toString())

//Native Prototype Object
var Rectangle = {
    name: "Rectangle",
    getArea: function getArea() {
        return this.width * this.height;
    },
    getPerimeter: function getPerimeter() {
        return 2 * (this.width + this.height);
    },
    toString: function toString() {
        return this.name + " a=" + this.getArea() + " p=" + this.getPerimeter();
    }
};

var Square = Object.create(Rectangle);
Square.name = "Square";
Square.getArea = function getArea() {
    return this.width * this.width;
};
Square.getPerimeter = function getPerimeter() {
    return this.width * 4;
};

// var rect = Object.create(Rectangle);
// rect.width = 6;
// rect.height = 4;
// var square = Object.create(Square);
// square.width = 5;
// console.log(rect.toString());
// console.log(square.toString());

//Fabric Object, Fabric Function
function Controller(model, view) {
    view.update(model.value);
    return {
        up: function onUp(evt) {
            model.value++;
            view.update(model.value);
        },
        down: function onDown(evt) {
            model.value--;
            view.update(model.value);
        },
        save: function onSave(evt) {
            model.save();
            view.close();
        }
    };
}

var on = Controller(
    // Inline a mock model
    {
        value: 5,
        save: function save() {
            console.log("Saving value " + this.value + " somewhere");
        }
    },
    // Inline a mock view
    {
        update: function update(newValue) {
            console.log("View now has " + newValue);
        },
        close: function close() {
            console.log("Now hiding view");
        }
    }
);
// setTimeout(on.up, 100);
// setTimeout(on.down, 200);
// setTimeout(on.save, 300);

// Output
// View now has 5
// View now has 6
// View now has 5
// Saving value 5 somewhere
// Now hiding view

function rodion(name, age) {
    this.name = name;
    this.age = age;
}


// console.log(typeof(Function))

// function get(name, text){
//     return name.test(text);
// }

var animal = /cat/;

animal.speak = function speak() {
    console.log("The " + this + " says miaow");
};
animal.speak();
console.log(animal.test('caterpiller'));