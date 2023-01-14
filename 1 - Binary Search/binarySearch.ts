function binarySearch(list: Array<number>, item: number): number | null {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    if (guess === item) {
      return mid;
    } else if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return null;
}

const list = [1, 3, 5, 7, 9];

console.log(binarySearch(list, 3)); // Returns 1 - index of "3"
console.log(binarySearch(list, -1)); // Returns null - there's not "-1"