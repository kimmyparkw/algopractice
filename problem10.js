let sum = 0

const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i ++) {
        if (n % i === 0) {
            return false
        }
    }
    return n > 1;
}


for (let p = 2; p < 2000000; p ++) {
    if (isPrime(p)) {
        sum += p
    }
}

console.log(sum)