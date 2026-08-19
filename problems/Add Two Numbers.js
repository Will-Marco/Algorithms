var addTwoNumbers = function (l1, l2) {
  let result = [];
  let dec = 0;
  const length = l1.length > l2.length ? l1.length : l2.length;
  for (let i = 0; i < length; i++) {
    let line1 = l1[i] || 0;
    let line2 = l2[i] || 0;
    let x = line1 + line2 + dec;
    if (x % 10 >= 0) {
      dec = Math.floor(x / 10);
      result.push(x % 10);
    } else {
      result.push(x);
    }
  }
  if (dec > 0) {
    result.push(dec);
  }
  return result;
};

addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9]);
