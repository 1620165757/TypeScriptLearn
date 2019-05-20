interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = {firstName: "Jane", lastName: "User"};

document.body.innerHTML = greeter(user);

let flag: boolean = false;
let sre: string = '';
let arr1: number[] = [];
let arr2: Array<any> = [];
let arrTuple: [string, number, boolean] = ['1', 1, false];

enum Color {Red, Green, Blue}

let color: Color = Color.Blue;
console.log(color);
