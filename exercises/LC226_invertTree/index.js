function invertTree(root) {
    function invert(tree) {
        // if root is empty, return
        if (!tree) {
            return
        }

        //switch
        let temp = tree.left;
        tree.left = tree.right;
        tree.right = temp;

        //recursion calls
        invert(tree.left);
        invert(tree.right);
    }

    invert(root);
    return root;

}

module.exports = invertTree;
