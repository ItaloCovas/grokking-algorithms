function maxArrayValue(arr: Array<number>): number | undefined {
    // Base case - array has only 2 values -> compare to see which one is greater
    if(arr.length === 2) return arr[0] > arr[1] ? arr[0] : arr[1];

    let subMax: number | undefined = maxArrayValue(arr.splice(1));

    return arr[0] > subMax! ? arr[0] : subMax;
}

const array = [10, 400, 1250, 20, 9];

console.log(maxArrayValue(array));

