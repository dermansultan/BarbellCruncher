var userWeight = document.getElementById("userInput");
var barbellWeight = document.getElementById("barbellweight");
var calcBtn = document.getElementById("calcbtn");
var errorMessage = document.getElementById("error");
// var hideIt = document.querySelectorAll('.resulttext');
//Variables for individual weight plates
var fortyFive = 0;
var thirtyFive = 0;
var twentyFive = 0;
var ten = 0;
var five = 0;
var twoPointFive = 0;


function weightCheck() {
    console.log(userWeight.value);
}

function barbellCheck(){
    console.log(barbellWeight.value);
}

function plateReset()
{
    fortyFive = 0;
    thirtyFive = 0;
    twentyFive = 0;
    ten = 0;
    five = 0;
    twoPointFive = 0;
}

//HTML divs of each plate takes value of plate after calculation and inserts it in
function addPlates(){
var hideIt = document.querySelectorAll('.resulttext');
var i;
for (i = 0; i < hideIt.length; i++) {
  hideIt[i].style.display = "block";
}
document.getElementById("result45").innerHTML = fortyFive;
document.getElementById("result35").innerHTML = thirtyFive;
document.getElementById("result25").innerHTML = twentyFive;
document.getElementById("result10").innerHTML = ten;
document.getElementById("result5").innerHTML = five;
document.getElementById("result2.5").innerHTML = twoPointFive;
}

//Takes base weight + barbell weight divides by 2 to get one side. Checks for each plate condition. Error if applicable
function calculateBtn() 
{
    var calculateIt = (userWeight.value - barbellWeight.value) / 2;
    while (calculateIt > 0) {
if (calculateIt >= 45) {
     calculateIt = calculateIt - 45;
     fortyFive++;
 } else if (calculateIt >= 35 ) {
     calculateIt = calculateIt - 35;
     thirtyFive++;
 }   else if (calculateIt >= 25) {
     calculateIt = calculateIt - 25;
     twentyFive++;
 } else if (calculateIt >= 10) {
     calculateIt = calculateIt - 10;
     ten++;
 } else if (calculateIt >= 5) {
     calculateIt = calculateIt - 5;
     five++;
 } else if (calculateIt >= 2.5) {
     calculateIt = calculateIt - 2.5;
     twoPointFive++;
 } else {
     break;
 }
 } if (calculateIt != 0) {
errorMessage.style.display = "block";
 } else {
errorMessage.style.display = "none";
 } console.log(calculateIt);
    console.log(fortyFive);
addPlates();
 plateReset();
} 




//Event Listeners 
userWeight.addEventListener("change" , weightCheck);
barbellWeight.addEventListener("change", barbellCheck);
calcBtn.addEventListener("click", calculateBtn);