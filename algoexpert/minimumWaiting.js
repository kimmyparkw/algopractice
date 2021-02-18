const minimumWaitingTime = (queries) => {
    if (queries.length) {
        const sorted = queries.sort((a,b) => a - b) //sort the query in ascending order to ensure you're adding the smallest numbers
        let minimumWaitTime = 0 //the total amout of wait time by the end of the query
        let runningTotal = 0 //the waiting time of the current query
        for (let i = 0; i < sorted.length; i ++) {
            runningTotal += sorted[i-1]
            minimumWaitTime += runningTotal
        }
        return minimumWaitTime
    }
    return 0
}