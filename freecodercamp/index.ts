/*
from:  https://www.freecodecamp.org/news/learn-typescript-beginners-guide/
*/

// *** Types in TypeScript ***
// define variables like in js, ts infers type from value given to variables
let myname = "bob";

// optionally you can declare vars and type the variable
let sport: string = 'football';
let id: number = 5;
let hasDog: boolean = true;

let unit: number 
unit = 5
// if you tried to assign unit = '7' it would return an ERROR

// a union type is a variable that can be assigned more than one type
let age: string | number
age = 26

// ** Arrays in TypeScript **
// In typescript data in arrays have the type defined
let ids: number[] = [1,2,3,4,5]
let names: string[] = ['Danny','Anna','Bazza']
let options: boolean[] = [true,false,false]

let books: object[] = [ {name: 'Sapiens', author: 'Noah Harari'}]
let arr: any[] = ['hello',1,true]

ids.push(6)  // this would work
// but ids.push('7') would ERROR because only number is acceptable for ids

// unions types for arrays are also possible
let person: (string | number | boolean)[] = ['danny',1,true]

// TypeScript infers the type if none is set from the value given to it

// There is a special type of an array called a Tuple, an array with a fixed size and known datatypes
let peoples: [string, number, boolean] = ['bob', 1, true]
// peoples[0] = 100 would ERROR and say 0 can only be a string

// **** Objects in TypeScript ****
// Objects in ts must have all correct properties and value types
// declare object
let personObj: {
    name: string
    location: string
    isProgrammer: boolean
}

personObj = {
    name: 'Kevin',
    location: 'US',
    isProgrammer: true,
}

// personObj.isProgrammer = 'yes' would ERROR with should be boolean

// personObj = {
//    name: 'John',
//    Location: 'UK'
// }  would ERROR with missing isProgrammer property

// When defining objects you will usually use interface
interface PeepObj {
    name: string
    location: string
    isProgrammer: boolean
}

let peep1: PeepObj = {
    name: 'Danny',
    location: 'UK',
    isProgrammer: true,
}
let peep2: PeepObj = {
    name: 'Sarah',
    location: 'Germany',
    isProgrammer: false,
}

// You can declare function properties
interface Speech {
    sayHi(name: string): string;
    sayBye: (name: string) => string;
}

let sayStuff: Speech = {
sayHi: function (name: string) {
    return `Hi ${name}`;
},
sayBye: (name: string) => `Bye ${name}`,
};

console.log(sayStuff.sayHi('Heisenberg')); // Hi Heisenberg
console.log(sayStuff.sayBye('Heisenberg')); // Bye Heisenberg

// *** Function in TypeScript ***
function circleOG(diam: number): string {
return 'The circumference is ' + Math.PI * diam
}
// or
const circleAF = (diam: number): string => {
return 'The circumference is ' + Math.PI * diam
}

// TS infers type, it isn't necessary to state the function is a function
// or the return type is a string.
// But sometime explicitly typing is used for clarity

// Using explicit typing 
const circleE: Function = (diam: number): string => {
return 'The circumference is ' + Math.PI * diam;
};

// Inferred typing - TypeScript sees that circle is a function that always returns a string, so no need to explicitly state it
const circleI = (diam: number) => {
return 'The circumference is ' + Math.PI * diam;
};
// Adding a question mark(?) after a parameter makes it optional
const add = (a: number, b: number, c?: number | string) => {
    console.log(c);
  
    return a + b;
};

console.log(add(5, 4, 'I could pass a number, string, or nothing here!'));
// I could pass a number, string, or nothing here!
// 9

// A function that returns nothing returns void, this can be explicitly stated or infered like other return values
const logMessage = (msg: string): void => {
    console.log('This is the message: ' + msg);
};

logMessage('TypeScript is superb'); // This is the message: TypeScript is superb

// you can declare a function but not define it by using a function signature
let sayHello: (name: string) => void;

// Define the function, satisfying its signature
sayHello = (name) => {
  console.log('Hello ' + name);
};

sayHello('Danny'); // Hello Danny

// Dynamic (any) types, any not recommended since it defeats the purpose of ts
let age2: any = '100'
age2 = 100
age2 = {
    years: 100,
    months: 2,
}

// Type Aliases for reducing code duplication and act as a single source of truth
type StringOrNumber = string | number

type PersonObject = {
    name: string;
    id: StringOrNumber;
}

const sayHello2 = (person: PersonObject) => {
    return 'Hi ' + person.name;
}

// With the non-null assertion operator (!) you can tell the compiler explicity thast an expression has a value other
// than null or undefined.  This can be useful when the compiler cannot infer the type with certainty.

// non-null assertion is useful with DOM elements
const link = document.querySelector('a');

// console.log(link.href); would ERROR: Object is possibly 'null'. ...

// with the non-null operator no error
const link2 = document.querySelector('a')!;

console.log(link2.href); // www.freeCodeCamp.org

// TS could infer the type from the above link variable because
// of Type Interence, it's type is HTMLAnchorElement

// But if you are selecting a DOM element by class or id ts can not infer type
// with type casting type can be known

const form = document.getElementById('signup-form') as HTMLFormElement;

console.log(form.method); // post

// **** Classes in TypeScript ****

class Person {
    name: string;
    isCool: boolean;
    pets: number;

    constructor(n: string, c: boolean, p: number) {
        this.name = n;
        this.isCool = c;
        this.pets = p;
    }

    sayHello() {
        return `Hi, my name is ${this.name} and I have ${this.pets} pets`
    }
}

const person1 = new Person('Danny', false, 1)
// but const person2 = new Person('Sarah', 'yes', 6); would ERROR with
// ERROR: Argument of type 'string' is not assignable to parameter of type 'boolean'.

// you could create an array that can only use the Person class
let People: Person[] = [person1]

// access modifiers can be added to the properties of a class
class Person2 {
    readonly name: string; // This property is immutable - it can only be read
    private isCool: boolean; // Can only access or modify from methods within this class
    protected email: string; // Can access or modify from this class and subclasses
    public pets: number; // Can access or modify from anywhere - including outside the class
  
    constructor(n: string, c: boolean, e: string, p: number) {
      this.name = n;
      this.isCool = c;
      this.email = e;
      this.pets = p;
    }

    sayMyName() {
        console.log(`Your not Heisenberg, you're ${this.name}`);
    }
}

const person3 = new Person2('Danny', false, 'dan@e.com', 1);
console.log(person1.name); // Fine
person1.name = 'James'; // Error: read only
console.log(person1.isCool); // Error: private property - only accessible within Person class
// console.log(person1.email); // Error: protected property - only accessible within Person class and its subclasses
console.log(person1.pets); // Public property - so no problem

// If access modifiers are omitted by default the property will be public

// Classes can also be extended just like js

class Programmer extends Person2 {
    programmingLanguages: string[];
  
    constructor(
      name: string,
      isCool: boolean,
      email: string,
      pets: number,
      pL: string[]
    ) {
      // The super call must supply all parameters for base (Person) class, as the constructor is not inherited.
      super(name, isCool, email, pets);
      this.programmingLanguages = pL;
    }
}
