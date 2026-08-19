function generateUnsortedArray(length = 10) {
  let array = [];
  while (array.length < length) {
    const randomValue = Math.floor(Math.random() * length);
    if (!array.includes(randomValue)) {
      array.push(randomValue);
    }
  }
  return array;
}
console.log(generateUnsortedArray());
