const getNthFib = (n) => {
    if (n === 0 || n === 1) {
        return 0
    }

    const arr = [0, 1]
    let a = 0
    let b = 1

    while (arr.length < n) {
        arr.push([arr[a]] + arr[b])
        a++
        b++
    }
    return arr[arr.length-1]
}