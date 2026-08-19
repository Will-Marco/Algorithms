// O(n)
function sumTo(n: number): number {
  if (n <= 0) return 0; // 0 va manfiy sonlar uchun ham to'g'ri base case
  return n + sumTo(n - 1);
}

// console.log(sumTo(5));

// O(n)
function power(base: number, exp: number): number {
  if (exp <= 0) return 1;
  return base * power(base, exp - 1);
}
// console.log(power(2, 4));

// O(n²)
function reverseString(str: string): string {
  if (str.length <= 1) return str;

  const first = str[0];
  const rest = str.slice(1);

  return reverseString(rest) + first;
}

// console.log(reverseString('hello'));

// O(n²)
const countDown = (n: number): number[] =>
  n <= 0 ? [] : [n, ...countDown(n - 1)];

// console.log(countDown(5));

// O(n)
// function isPalindrome(str: string): boolean {
//   if (str.length <= 1) return true;

//   const first = str[0];
//   const last = str[str.length - 1];

//   if (first !== last) return false;

//   return isPalindrome(str.slice(1, -1));
// }

// O(n)
// function isPalindrome(x: number): boolean {
//   if (x < 0) return false;
//   if (x < 10) return true;

//   let first = Math.trunc(x);

//   while (first >= 10) {
//     first = Math.floor(first / 10);
//   }

//   const last = x % 10;

//   if (first !== last) return false;

//   x = Math.floor(x / 10);

//   const power = Math.floor(Math.log10(x));

//   return isPalindrome(x % Math.pow(10, power));
// }
// console.log(isPalindrome(1000021)); // true

// O(n)
// function isPalindrome(x: number): boolean {
//   if (x < 0 || (x % 10 === 0 && x !== 0)) {
//     return false;
//   }

//   let original = x;
//   let reversed = 0;

//   while (x > 0) {
//     let lastDigit = x % 10;
//     reversed = reversed * 10 + lastDigit;
//     x = Math.floor(x / 10);
//   }

//   return original === reversed;
// }

// console.log(isPalindrome(121)); // true

// O(2ⁿ)
const fibonacci = (n: number): number =>
  n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
// console.log(fibonacci(6));

// O(n)
const memo = new Map<number, number>();
const fib = (n: number): number => {
  if (n <= 1) return n;

  if (memo.has(n)) return memo.get(n)!;

  const result = fib(n - 1) + fib(n - 2);
  memo.set(n, result);

  return result;
};

const obj = {
  a: 1,
  b: 'string',
  c: [1, 2, 3, 4, 5],
  d: {
    a: 1,
    b: 'string',
    c: [1, 2, 3, 4, 5],
    d: {
      a: 1,
      b: 'string',
    },
  },
};

// O(n)
function deepClone(obj: any): any {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  if (obj instanceof Date) return new Date(obj.getTime());

  if (obj instanceof RegExp) return new RegExp(obj);

  let cloneObj: any = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key]);
    }
  }
  return cloneObj;
}

console.log(deepClone(obj));
