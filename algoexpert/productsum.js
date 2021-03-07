const productSum = (array) => {
    let sum = 0
    for (let item of array) {
        if (Array.isArray(item)) {
            sum += productSum(item, depth + 1)
        } else {
            sum += item
        }
    }
    return sum * depth
}

//this works because in line 5, you're holding on to the original sum
//and adding the result of line 10 from when you recursively call productSum
//on the nested array