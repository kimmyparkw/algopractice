//loop through all numbers greater than 2
//check to see if they're prime
//have a counter
//if the number that is checked is prime, add one to counter
//go until counter is 10001

const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i ++) {
        if (n % i === 0) {
            return false
        }
    }
    return n > 1;
}

const finalPrime = (n) => {
    let primeCounter = 0
    let currentNum = 2
    let lastPrime = 0
    while (primeCounter < n) {
        if (isPrime(currentNum)) {
            primeCounter++
            console.log('currentPrime', currentNum)
            lastPrime = currentNum
        }
        currentNum++
    }
    console.log(currentNum)
}

finalPrime(10001)