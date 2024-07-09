const extraLongFactorials = n => !(n > 1) ? 1 : extraLongFactorials(n - 1) * n;

console.log(extraLongFactorials(45));
