
// const isPrime = (n) => {
//     for (let i = 2; i < n; i ++) {
//         if (n % i === 0) {
//             return false
//         }
//     }
//     return n > 1
// }

// const findFactors = (num) => {
//     let factors = []
//     // console.log('factors',factors)
//     for (let i = 3; i <= num; i ++) {
//         // console.log('beginning of loop')
//         if (num % i === 0 && isPrime(i)) {
//             factors.push(i)
//             i++
//         } else {
//             i++
//         }
//     }
//     console.log('after factors', factors)
//     let largest = factors.pop()
//     console.log(largest)
// }

// findFactors(705)

const largestPrime = (n) => {
    let i = 2
    while (i<=n) {
        if (n%i === 0) {
            n /= i
        } else {
            i ++
        }
    }
    console.log(i)
}

largestPrime(10)