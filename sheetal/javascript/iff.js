// if statement

let age = 2;
if (age>=18) {
console.log("eligible for vote");
} else {
    console.log(" not eligible for vote");
}


// if else if...

let score = 80;
if ( score >= 90 ){
    console.log("grade A");
} else if(score >= 80 ){
    console.log("grade B");
} else if(score >= 70){
    console.log("grade C");
} else {
    console.log("fail");
}  


// nested if
let AGE = 16;
let country = "USA";
let text = "You can Not drive!";

if (country == "USA") {
  if (AGE >= 16) {
    text = "You can drive!";
    console.log(text);
  }
}


// ternary opertors
let agee = 16;
let txt = (age < 18) ?  "Minor" : "Adult";
console.log(txt);


// switch statement

let day = 4;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  default:
    console.log("Invalid day");
}


let fruit = "apple";

switch (fruit) {
  case "apple":
  case "banana":
  case "orange":
    console.log("This is a fruit.");
    break;

  case "carrot":
    console.log("This is a vegetable.");
    break;

  default:
    console.log("Unknown item.");
}

