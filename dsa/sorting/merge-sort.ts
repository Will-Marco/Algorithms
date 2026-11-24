function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];

  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
  }

  return result;
}

function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length / 2);

  const sortedLeft = mergeSort(arr.slice(0, middle));
  const sortedRight = mergeSort(arr.slice(middle));

  const x = merge(sortedLeft, sortedRight);
  return x;
}

console.log(mergeSort([0, 1, 8, 4, 7, 9, 3, 5, 2, 6]));
