function factorial(x: number): number {
   // Base case - which stops the recursion
   if(x === 0) return 1;
   return x * factorial(x - 1);
}

console.log(factorial(5)); // Returns 120    ====> 5 * 4 * 3 * 2 * 1 = 120