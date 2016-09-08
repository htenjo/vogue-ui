interface Person{
    name: string;
    age: number;
}

class MyEmployee implements Person{
    name: string;
    age: number;
    surename: string;
}

let john : Person = {name : "Juan", age : 23};
//let peter : Person = {name : "Juan", age : 23, surename: "Jackson"}; //Generates error
let mary : MyEmployee = {name : "Juan", age : 23, surename: "Jackson"};
let peter : Person = mary; //Deconstructing the object MyEmployee

//===========================================================================
interface Farewell{
    (name : string) : string;
}

let intFunction : Farewell = function (name: string) {
    return "Hello, " + name;
}

console.log(intFunction("Hernan"));

//===========================================================================
interface MyArrayOfNumbers {
    [index:number ] : string; //Keys as a number
}
let myArray : MyArrayOfNumbers = ["john", "peter", "mary2"];

interface MyArrayOfAges {
    [index:string ] : number; //Keys as a string
}
let ages : MyArrayOfAges = {};
ages ["john"] = 24;
ages ["peter"] = 44;
ages ["mary"] = 35;
//ages [2] = 23; //This generates an error in TypeScript

//===========================================================================
interface Game{
    name : string;
}

interface ActionGame extends Game{
    speed : number;
}

let myGame = <ActionGame>{};
myGame.name = "Doom";
myGame.speed = 4;

//===========================================================================