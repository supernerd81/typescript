import './style.css'


let age:number = 43;

for (let i = 0; i <= age; i++) {
    console.log(i);
}

if(age >= 18) {
    console.log("Das Alter ist größer als 18!");
} else {
    console.log("Du bist unter 18!!");
}

let score:number = 0;

if(score != 0) {
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