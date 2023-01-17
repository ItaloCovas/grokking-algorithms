// Using Selection Sort to sort an array in descending order

function findMinIndex(arr: Array<number>): number {
    let min: number = arr[0];
    let minIndex: number = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
    }

    return minIndex;
}


function selectionSort(arr: Array<number>): Array<number> {
    const newArray: Array<number> = [];
    let copyArray = arr.slice();

    for(let i = 0; i < arr.length; i++) {
        let min = findMinIndex(copyArray);
        newArray.push(copyArray.splice(min, 1)[0]);
    }

    return newArray;
}

const sourceArray = [5, 3, 6, 2, 10];
const sortedArray = selectionSort(sourceArray);

console.log("Source array - ", sourceArray); // [5, 3, 6, 2, 10]
console.log("New sorted array - ", sortedArray); // [2, 3, 5, 6, 10]