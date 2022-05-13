


describe("calculate Monthly Payment tests", function() {

it('should calculate the monthly rate correctly', function () {
  const values ={
    amount: ("10000"),
    years: ("8"),
    rate: ("5.8"),
  };

  expect(calculateMonthlyPayment(values)).toEqual("130.44");

});


it("should return a result with 2 decimal places", function() {
const values ={
  amount: ("10043"),
  years: ("8"),
  rate: ("5.8"),
};

expect(calculateMonthlyPayment(values)).toEqual('131.00');

});


it("should return a string", function() {
const values ={
  amount: ("10043"),
  years: ("8"),
  rate: ("5.8"),
};

expect(calculateMonthlyPayment(values)).toEqual(jasmine.any(String));

});

it("should still work with extra chars like $", function() {
const values ={
  amount: ("$10era04a3"),
  years: ("8dfg"),
  rate: ("5.sderga8"),
};

expect(calculateMonthlyPayment(values)).toEqual('131.00');

});


});


beforeEach(function() {
  spyOn(window, 'alert');
});

describe("Check String tests", function() {

  it("should get rid of the letters in a string",function () {
    expect(CheckString("$2341sdfa23sdf22sd.1234ssdf")).toEqual(23412322.1234);
  });

it("should return a number",function () {
  expect(CheckString("pie3.14")).toEqual(jasmine.any(Number));
});


it("shouldn't break if there are no numers in the string",function () {
  expect(CheckString("CatsAreTheBest")).toEqual(0);
});

it("should Alert the user if there are no numbers",function () {
  CheckString("CatsAreTheBest");
  expect(window.alert).toHaveBeenCalledWith('Please put in a Number!');
});

it("should still work with spaces",function () {
  expect(CheckString("$2341s dfa23sd   f22sd.1234 ssdf")).toEqual(23412322.1234);
});


});
