function quickSort(arr: Array<number>): Array<number> {
    // Base Case - if the array has 0 or 1 elements, it means its already sorted
    if(arr.length < 2) return arr;
    else {
        // Choosing the pivot element always by the first index. For a better execution time, choose it randomly.
        let pivot = arr[0]; 
        let minors = arr.slice(1).filter(item => item <= pivot);
        let majors = arr.slice(1).filter(item => item > pivot);

        return quickSort(minors).concat([pivot], quickSort(majors));
    }
}

const array = [20, 69, 10, 22, 189, 1092]

console.log(quickSort(array));