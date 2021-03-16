const bubbleSort = (array) => {
    let swaps = 0
    let helperFunction = (endPoint) => {
        for (let i = 0; i < array.length; i ++) {
            let a = array[i]
            let b = array[i+1]
            if (a > b) {
                array[i] = b
                array[i+1] = a
                swaps++
            }
        }
    }
    
}