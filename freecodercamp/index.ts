/*
from:  https://www.freecodecamp.org/news/learn-typescript-beginners-guide/
*/

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

// Objects in ts must have all correct properties and value types
//declare object
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

