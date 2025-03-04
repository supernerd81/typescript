import './style.css'


let age:number = 43;

for (let i = 0; i < age; i++) {
    console.log(i+1);
}

if(age >= 18) {
    console.log("Das Alter ist größer als 18!");
} else {
    console.log("Du bist unter 18!!");
}

let score:number = 0;

if(score !== 0) {
    console.log("Score is available");
}

if(score) {
    console.log("Score is evaluated as truthy");
} else {
    console.log("Score is not evaluated as truthy.");
}

let username:string = "d";
if(username) {
    console.log("Username is available")
} else {
    console.log("Username is evaluated as falsy.");
}

let isAdmin:boolean = false;

if(isAdmin) {
    console.log("isAdmin is evaluated as truthy");
} else {
    console.log("isAdmin is false.");
}

const numbers: number[] = [
    3, 7, 12, 25, 39, 42, 56, 63, 78, 81,
    90, 105, 119, 134, 150, 167, 182, 199, 210, 225
];
const newNumbers = numbers.map(number => number * 2);
console.log(newNumbers);

const words: string[] = [
    "apple", "banana", "grape", "orange", "cherry",
    "mountain", "river", "ocean", "sunset", "morning",
    "keyboard", "monitor", "speaker", "printer", "battery",
    "sunshine", "notebook", "backpack", "journey", "holiday"
];

console.log(words);
const filteredWords: string[] = words.filter(word => word.length > 5);
console.log(filteredWords);


const sum: number = numbers.reduce((acc, num) => acc + num, 0);
console.log(`Die Summe aller Zahlen ist: ${sum}`);

const newNumbers2: boolean = numbers.some(number => number > 10);
console.log(newNumbers2);

