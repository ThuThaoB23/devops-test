function calculate(a, b) {
    return {
        sum: a + b,
        difference: a - b,
        product: a * b,
        quotient: b !== 0 ? a / b : null
    };
}

// Example usage:
const a = 10;
const b = 5;
const result = calculate(a, b);
console.log(result);