





describe("submit Payment Info Tests",function() {

  beforeEach(function() {
    billAmtInput.value = 100;
    tipAmtInput.value = 30;
  });

it("should add curPayment to allPayments", function () {
 submitPaymentInfo();
 expect(allPayments['payment1'].billAmt).toEqual('100');
   expect(allPayments['payment1'].tipAmt).toEqual('30');
   expect(allPayments['payment1'].tipPercent).toEqual(30);
expect(Object.keys(allPayments).length).toEqual(1);


});

it("should not add if curPayment is empty or negitive ", function () {
  billAmtInput.value = -215;
submitPaymentInfo();
  expect(Object.keys(allPayments).length).toEqual(0);

  tipAmtInput.value = '';

  submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(0);
});

});


describe("create Current Payment Tests",function() {

  beforeEach(function() {
    billAmtInput.value = 100;
    tipAmtInput.value = 30;
  });


it("should create Current Payment", function () {

let obj = {
  billAmt: '100',
  tipAmt: '30',
  tipPercent: 30,
}

expect(createCurPayment()).toEqual(obj);

});


it("should not work if values are empty or negitive", function () {
  tipAmtInput.value = '';
  expect(createCurPayment()).toEqual(undefined);
tipAmtInput.value = ' ';
expect(createCurPayment()).toEqual(undefined);
tipAmtInput.value = -30;
expect(createCurPayment()).toEqual(undefined);
});

});


describe("append Payment Table Tests",function() {

it("should ", function () {
  let obj = {
    billAmt: '100',
    tipAmt: '30',
    tipPercent: 30,
  }
appendPaymentTable(obj);
  expect(paymentTbody.children[0].children[0].innerText).toEqual("$100");
  expect(paymentTbody.children[0].children[1].innerText).toEqual("$30");
  expect(paymentTbody.children[0].children[2].innerText).toEqual("30%");
});


});

describe("update Summary Tests",function() {
  beforeEach(function() {
    billAmtInput.value = 100;
    tipAmtInput.value = 30;
     submitPaymentInfo();
  });

it("should update Summary", function () {

updateSummary()
  expect(summaryTds[0].innerHTML).toEqual("$100");
  expect(summaryTds[1].innerHTML).toEqual("$30");
  expect(summaryTds[2].innerHTML).toEqual("30%");
});

it("should be 0", function () {
allPayments = {};
updateSummary()
  expect(summaryTds[0].innerHTML).toEqual("$0");
  expect(summaryTds[1].innerHTML).toEqual("$0");
  expect(summaryTds[2].innerHTML).toEqual("0%");
});

});
