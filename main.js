function generateFibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n);
}

// Example: Generate the first 200 Fibonacci numbers
const first100Fibonacci = generateFibonacci(200);
console.log(first100Fibonacci);