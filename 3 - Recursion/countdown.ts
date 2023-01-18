function recursionCountdown(counter: number): number | undefined {
    console.log(counter);

    // Base case - which stops the recursion
    if(counter <= 0) return;
    recursionCountdown(counter - 1);
}

recursionCountdown(5); // 5 - 4 - 3 - 2 - 1 - 0

