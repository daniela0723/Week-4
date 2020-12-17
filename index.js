//1. Using template literals instead of concatenation, write a function 
function writeFullName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
}

writeFullName("Daniela", "Carrillo");

//2. Write the same function as above as an arrow function with a different name
const writeFullNameArrow = (firstName, lastName) => `${firstName} ${lastName}`;

console.log(writeFullNameArrow("Daniela", "Carrillo"));

//3.a Using setTimeout, write an inline, anonymous arrow function in the callback parameter position
//1000 ms = 1 second;

setTimeout(() => alert("Time is up!"), 3000);

//3.b Using setInterval, pass askAreWeThereYet into the callback parameter position.

const askAreWeThereYet = () => alert("Are we there yet?");

setInterval(askAreWeThereYet, 5000);

//4
/*a Write a function named processSplicedValue that takes 3 parameters – an array, the index of the element to be spliced from the array, and a callback that will process the sliced element.

b.	Inside the function, use the first two parameters to splice an element from the array.

c.	Call the callback function and pass the spliced value into it.

d.  Outiside of your function, create an array of strings.  Call processSplicedValue.*/

const months = ["January", "February", "March", "April", "May", "June"];

function processSplicedValue(array, splicedElement, callBack) {
  splicedValue = array.splice(`${splicedElement}`, 1);
  callBack(splicedValue);
}

processSplicedValue(months, 1, console.log); //

//e.
processSplicedValue(months, 1, alert); // Second call.  Alerts March.

//f.	Call the processSplicedValue function again, but this time pass in an anonymous arrow function that alerts the spliced value.

processSplicedValue(months, 1, (splicedValue) => alert(splicedValue)); // Third call alerts April.

//g.	Call the processSplicedValue function one more time, but this time, pass in a custom function of your choice that you should create and name.
//console.log(typeof `${splicedValue}`); // string, so use string method to transform

capitalizeSplicedValue = () => console.log(`${splicedValue}`.toUpperCase());

processSplicedValue(months, 1, capitalizeSplicedValue);
// Displays MAY on console.


