function romanToInt(s) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let number = 0;

  for (let i = 0; i < s.length; i++) {
    const current = symbols[s[i]];
    const next = symbols[s[i + 1]] ?? 0;

    if (next > current) {
      number -= current;
    } else {
      number += current;
    }
  }

  return number;
}
console.log(romanToInt('MCMXCIV'));
