// I need a Program that has 2 Buttons
// one to increment and show a number +1 on klick
// one that logs out the current number and resets the actual counter back to zero and reflects that reset on the website too.

let contentCounts = document.getElementById("count")

// Harth says to use const instead of let. (will follow tutorial for now, but will keep in mind the const)
// count is coming from the html file (<h2 id="count">0</h2>). it has been set to 0 in the html as starting point, 
// since it has not been declared yet and would show an empty space when opening the website

let count = 0

// the count from the HTML file was a string. Javascript cannot calculate with a string. 
// thats why i need to set count to a number 0. 
// if i dont do this, the website will just add a 1 to the end of my text 0 , write that back into the string 
// and then read the string 1 and add another string 1 to it after each increment button press
// this will result in: [object HTMLHeadingElement]111111111 

 function increment(){
    count+=1
    contentCounts.textContent= count
  }

//Harth says to use .innerHTML. (will follow tutorial for now, but will keep in mind)
//this function declares what has to happen when a button is pressed. it takes the number of count and adds +1
//then it puts this new number into the html spot. 

 let printContent = document.getElementById("lastNumber")

 // i am declaring another variable, one i can find in the html again: <p id="lastNumber">Rages before Quits: </p>
 // this i do in preparation for the second function, to be able to log out my button presses on screen

 function save(){
    printContent.textContent+= " - "+ count
    count=0
    contentCounts.textContent= count
 }
//this function takes the variable i have created before. (This variable is a string. so adding a number to it 
//results in my string still being there and the number added at the end.)
// It puts another string onto the end of it to visibly set incoming numbers apart
//it then adds my current "count" variable, resulting in a "- number" for each time i press this button
// it then resets the count variable back to 0 and puts both new variables on the website in their respective place

