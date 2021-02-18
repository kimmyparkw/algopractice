const depthFirstSearch = (array) => {
    const depthHelper = (tree) => {
        array.push(tree.name)
        //base case - if no more children on the current tree, push the current name node and return
        if (!tree.children.length) {
            return array.push(tree.name)
        }
        //if there are children...
        if (tree.children.length) {
            //run recursion for every child, this will auto "reassign" tree every time since tree.children at i is passed in as tree
            for (let i = 0; i < tree.children.length; i ++) {
                depthHelper(tree.children[i])
            }
        }
    }
    depthHelper(this)
    return array
}