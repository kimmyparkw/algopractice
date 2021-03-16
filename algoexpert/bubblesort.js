const bubbleSort = (array) => {
    let isSorted = false
    let counter = 0
    while (!isSorted) { //!isSorted === (isSorted === false) <-- this statement is comparing "True" to truthy
        isSorted = true
        for (let i = 0; i < array.length - 1 - counter; i ++) {
            if (array[i] > array[i+1]) {
                array[i] = array[i+1]
                array[i+1] = array[i]
                isSorted = false
            }
        }
        counter ++
    }
    return array
}