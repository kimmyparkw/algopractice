//start at root of tree
//add root.left.value

//when you get to end of the branch, push the sum into array
//return array of sums

//time complexity: O(N)
//space complexity: O(log(N))
//depth search

const branchSums = (root) => {
    let sums = []

    //recursive function
    const branchSumsHelper = (node, runningSum, sum) => {
        newRunningSum = runningSum + node.value
        //if there is no node, then don't recursively call the function on a node that doesn't exist
        if (!node) {
            return 
        }
        if (!node.left && !node.right) { //if the node is a leaf node, then push the sum into the array
            return sums.push(newRunningSum) //
        } //move onto next node
        branchSumsHelper(node.left, newRunningSum, sums) //call the function on the left side of the branch
        branchSumsHelper(node.right, newRunningSum, sums) //call the function on the right side of branch
    }

    branchSumsHelper(root, 0, sums)
    return sums
}