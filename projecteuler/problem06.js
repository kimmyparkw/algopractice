const sumOfSquares = (n) => {
    //take in the input of one number, which is the limit of the natural numbers
    //square each number up until n and find the sum starting at 1
    //take the square of the sum on all numbers to n starting at 1
    let sumSquare = 0
    let squareSum = 0
    let i = 1
    while (i <= n) {
        sumSquare += (i*i)
        squareSum += i
        i++
    }
    squareSum = squareSum * squareSum
    //find the difference between the sum of squares and the square of sum
    //n=100 in final calculation
    let diff = squareSum - sumSquare
    console.log(diff)
}

sumOfSquares(100)