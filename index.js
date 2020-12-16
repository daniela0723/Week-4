// //1.
// function writeFullName(firstName, lastName) {
//   console.log(`${firstName} ${lastName}`);
// }

// writeFullName("Daniela", "Carrillo");

// //2.
// const writeFullNameArrow = (firstName, lastName) => `${firstName} ${lastName}`;

// console.log(writeFullNameArrow("Daniela", "Carrillo"));

//3.a
//For 'delay' 1000 ms = 1 second;

// setTimeout(() => alert("Time is up!"), 3000);

//3.b Using setInterval, pass askAreWeThereYet into the callback parameter position.

// const askAreWeThereYet = () => alert("Are we there yet?");

// setInterval(askAreWeThereYet, 5000);

//4
/*a Write a function named processSplicedValue that takes 3 parameters – an array, the index of the element to be spliced from the array, and a callback that will process the sliced element.

b.	Inside the function, use the first two parameters to splice an element from the array.

c.	Call the callback function and pass the spliced value into it.*/

//d.

const months = ["January", "February", "March", "April", "May", "June"];

function processSplicedValue(array, splicedElement, callBack) {
  const splicedValue = array.splice(`${splicedElement}`, 1);
  callBack(splicedValue);
}

processSplicedValue(months, 1, console.log); //

//e.
processSplicedValue(months, 1, alert); // Second call.  Alerts "March".

/* f.	Call the processSplicedValue function again, but this time pass in an anonymous arrow function that alerts the spliced value.*/

processSplicedValue(months, 1, alert); // Third call alerts "April". Needs to be an anonymous arrow function.

/* g.	Call the processSplicedValue function one more time, but this time, pass in a custom function of your choice that you should create and name.
 */
function transformSplicedValue() {
  const splicedString = splicedValue.toString();
  console.log(splicedString.toUpperCase);
}
transformSplicedValue(months, 1, capitalizeSplicedValue); 
// Displayed "MAY" on console when it worked.
