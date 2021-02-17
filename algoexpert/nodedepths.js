//time complexity: O(N)

const nodeDepths = (root) => {
    let total = 0

    const nodeDepthsHelper = (currentNode, depth) => {
        //depth keeps track of distance from root node
        //base case
        //accounts for branch with only one child node
        if (!currentNode) {
            return
        }
        //recursive case
        //accounts for leaf node
        if (!currentNode.left && !currentNode.right) {
            return total += depth
        }
        total += depth //summing up the depths
        depth++ //increment depth for the next round of numbers
        nodeDepthsHelper(currentNode.left, depth) //recursion for left node
        nodeDepthsHelper(currentNode.right, depth) //recursion for right node
    }

    nodeDepthsHelper(root, 0)
    return total
}