let monthlyPayment;
let loanAmount;
let loanYears;
let loanRate;




window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});





function getCurrentUIValues() {
//I got rid of the + because if someone decides to put in a $ or a letter with the number then it would break
//it would just give you NaN
  return {
    amount: (loanAmount.value),
    years: (loanYears.value),
    rate: (loanRate.value),
  }
}



function setupIntialValues()
{
  // Get the inputs from the DOM.
loanAmount = document.getElementById("loan-amount");
loanYears = document.getElementById("loan-years");
 loanRate = document.getElementById("loan-rate");

// Put some default values in the inputs
loanAmount.value = "$2000";
loanYears.value = "20yr";
loanRate.value = "10";


// Call a function to calculate the current monthly payment
update();
}


function update() {
  // Get the current values from the UI
  let inputs = getCurrentUIValues();
  monthlyPayment = calculateMonthlyPayment(inputs);

  // Update the monthly payment
updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const p = CheckString(values['amount']);
  let yr = CheckString(values['years']);
  let rt = CheckString(values['rate']);

let i =((rt/100)/12);
let n =Math.floor(yr*12);

let mp = (p*i)/(1-(Math.pow((1+i),-n)));

mp = mp.toFixed(2);
return mp;
}


  //this is so that if the user puts any leters or symbols like $, it won't break
function CheckString(str){
let newStr ="";
let regex =/[\d,.]/;

for(let s of str)
{
if(regex.test(s)){
  newStr += s;
}
}
if(newStr ===""){
  alert("Please put in a Number!");
  return 0;
}

return parseFloat(newStr);
}



// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly){

let paymentTxt =document.getElementById("monthly-payment");

paymentTxt.innerText = "$"+monthly;

}
