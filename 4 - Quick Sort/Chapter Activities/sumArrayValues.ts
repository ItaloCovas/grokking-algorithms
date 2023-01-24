function sumArrayValues(arr: Array<number>): number {
    // Base Case - array is empty
    if(arr.length === 0) return 0;
    
    return arr[0] + sumArrayValues(arr.slice(1)); 
}



const array = [1, 2, 3, 4, 5];

console.log(sumArrayValues(array)); // 15