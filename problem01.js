const fibonacci = (num) => {
    let arr = [1,2]
    let starting = 1
    while(arr[arr.length-1] <= num) {
        let newNum = arr[starting] + arr[starting-1]
        if (newNum < num) {
            arr.push(newNum)
        } else {
            break
        }
        starting++
    }
    let sum = 0
    arr.forEach(num => num % 2 === 0 ? sum += num : null)
    console.log(sum)
}

fibonacci(4000000)

