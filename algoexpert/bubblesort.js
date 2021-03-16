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


//the way it is written in algoexpert
function bubbleSort(array) {
    // Write your code here.
      let isSorted = false
      let counter = 0
      console.log('opposite of false is true', !isSorted)
      console.log('compares true === true', !isSorted === (isSorted === false))
      while (!isSorted) {
          isSorted = true
          for(let i = 0; i < array.length-1 - counter; i++) {
              let a = array[i]
              let b = array[i + 1]
              if(a > b) {
                  array[i] = b
                  array[i + 1] = a
                  isSorted = false
                  }
              }
          counter++
      }
      console.log(array)
      return array
  }