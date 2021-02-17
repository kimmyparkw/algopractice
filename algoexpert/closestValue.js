// recursive solution: time complexity O(log(N))

const findClosestValueInBst = (tree, target) => {
    const findClosestValueHelper = (tree, target, closest) => {
        if (!tree) { //break out of loop when you reach a "null" (no more sides to traverse)
            return closest
        } 
        //RECURSION PART
        //find the absolute difference between closestValue and target, as well as currentValue and target.
        // if target value - closest > target - current node, reassign closest
        if (Math.abs(target-closest) > Math.abs(target - tree.value)) { 
            closest = tree.value
        }
        if (target < tree.value) { //if target is < current node, eliminate right side of the BST
            return findClosestValueHelper(tree.left, target, closest)
        } else if (target > tree.value) { //if target is > the current node, eliminate the left side of the BST
            return findClosestValueHelper(tree.right, target, closest)
        }

    }

    return findClosestValueHelper(tree, target, tree.value)

}

// iterative solution: time complexity O(1)
// this is because the logic only has to be executed once since current node is assigned outside of the while loop
// if the current node was assign in the loop, if would have to execute the logic each time (i.e.- the recursive solution)

const findClosestValueInBst = (tree, target) => {
    const findClosestValueHelper = (tree, target, closest) => {
        let currentNode = tree

        while (currentNode) {
            if (Math.abs(target - closest) > Math.abs(target - currentNode)) {
                closest = currentNode.value
            }
            if (target < currentNode.value) {
                currentNode = currentNode.right
            } else if (target > currentNode.value) {
                currentNode = currentNode.left
            } else {
                break
            }
        }
        return closest
    }
    return findClosestValueHelper(tree, target, tree.value)
}