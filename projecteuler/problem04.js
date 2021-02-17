const isPalindrome = (n) => {
    let reverseString = n.toString().split('').reverse().join('')
    if (reverseString === n.toString()) {
        return true
    } else {
        return false
    }
}

const palindrome = () => {
    let largest = 0
    for (let i = 999; i >= 100; i --) {
        for (let j = 999; j >= 100; j--) {
            let product = i*j
            if (isPalindrome(product) && product > largest) {
                largest = product
            }
        }
    }
    console.log(largest)
}

palindrome()
