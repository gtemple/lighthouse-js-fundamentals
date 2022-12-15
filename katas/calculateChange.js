const calculateChange = function(total, cash) {
  let amount = cash - total;
  let change = {};

  let countBills = function(num, bill) {
    while (amount >= num) {
      if (change[bill]) {
        change[bill] += 1;
        amount -= num;
      } else {
        change[bill] = 1;
        amount -= num;
      }
    }
  }

  countBills(2000, 'twentyDollar');
  countBills(1000, 'tenDollar');
  countBills(500, 'fiveDollar');
  countBills(200, 'twoDollar');
  countBills(100, 'oneDollar');
  countBills(25, 'quarter');
  countBills(10, 'dime');
  countBills(10, 'dime');
  countBills(5, 'nickel');
  countBills(1, 'penny');

  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
