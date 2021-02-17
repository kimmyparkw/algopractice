const evaluate = (num) => {
    const arr = [...Array(21).keys()]
    let works = false
    // for (let i = 1; i < arr.length; i ++) {
    //     if (num % i === 0) {
    //         return works = true
    //         i++
    //     } else {
    //         return works = false
    //     }
    // }
    let i = 0
     while (i < arr.length) {
        if (num % i === 0) {
            works = true
            i++
        } else {
            works = false
            break
        }
    }
    return works
}

const smallestMultiple = () => {
    console.log('before loop')
    // while (i > 20) {
    //     if (!evaluate(i)) {
    //         console.log('hello')
    //         i++
    //     } else {
    //         console.log('world')
    //         return i
    //     }
    }

    for (let i = 20;  i > 20; i ++) {
        if (!evaluate(i)) {
            console.log('hello')
            i++
        } else {
            console.log('world')
            return i
        }
    }


console.log(smallestMultiple())