const insertionSort = (array) => {
    let sortedArray = array.slice(0, 1)
    let unsortedArray = array.slice(1)
    while (unsortedArray.length > 0) {
        for (let i = sortedArr.length - 1; i >= 0; i --) {
            let a = sortedArray[i]
            let b = sortedArray[i - 1]
            if (a < b) {
                sortedArray[i-1] = a
                sortedArray[i] = b
            }
        }
    }
    return sortedArray
}