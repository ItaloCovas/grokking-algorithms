function countArrayItems(arr: Array<any>): number {
    // Base Case - array is empty
    if(arr.length === 0 ) return 0;

    return 1 + countArrayItems(arr.splice(1));
}

const array = [1, 2, 3, 4, 5, 7, 7 ,7];

console.log(countArrayItems(array));