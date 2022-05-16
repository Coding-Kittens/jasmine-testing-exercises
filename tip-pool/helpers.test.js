


describe("sum Payment Total Tests",function() {

  beforeEach(function() {
    billAmtInput.value = 200;
    tipAmtInput.value = 40;
 submitPaymentInfo();
  });

it("should sums total tipPercent from allPayments ", function () {
expect(sumPaymentTotal('tipPercent')).toEqual(20);
billAmtInput.value = 100;
tipAmtInput.value = 10;
submitPaymentInfo();
expect(sumPaymentTotal('tipPercent')).toEqual(30);
});

it("should sums total billAmt from allPayments ", function () {
expect(sumPaymentTotal('billAmt')).toEqual(200);
billAmtInput.value = 100;
tipAmtInput.value = 10;
submitPaymentInfo();
expect(sumPaymentTotal('billAmt')).toEqual(300);
});

it("should sums total tipAmt from allPayments ", function () {
expect(sumPaymentTotal('tipAmt')).toEqual(40);
billAmtInput.value = 100;
tipAmtInput.value = 10;
submitPaymentInfo();
expect(sumPaymentTotal('tipAmt')).toEqual(50);
});

});


describe("calculate Tip Percent tests",function() {

it("should calculate Tip Percent", function () {
expect(calculateTipPercent(100,5)).toEqual(5);
expect(calculateTipPercent(100,8)).toEqual(8);
expect(calculateTipPercent(100,20)).toEqual(20);
expect(calculateTipPercent(100,15)).toEqual(15);
});


});

describe("append Td tests",function() {

it("should add a new TableRow", function () {
let newTr = document.createElement('tr');
appendTd(newTr,"newTableRow");
expect(newTr.innerText).toEqual("newTableRow");
newTr.remove();
});


});

describe("append Delete Btn tests",function() {

it("should add a  a delet button to a new TableRow", function () {
let newTr = document.createElement('tr');
appendDeleteBtn(newTr);
expect(newTr.children[0].value).toEqual("X");
newTr.remove();
});


});

afterEach(function(){
for(let s of summaryTds)
{
  s.innerHTML = '';
}
  paymentTbody.innerHTML = '';

  billAmtInput.value = '';
  tipAmtInput.value = '';
allPayments = {};
paymentTbody.innerHTML = '';
paymentId = 0;
});
