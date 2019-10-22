function maxDepth(root) {

    let maxDepth = 0;

    function deep(node, current) {
        if (!node && (current - 1) > maxDepth) {
            maxDepth = current - 1;
        } else {
            return;
        }

        deep(node.left, current + 1) ;
        deep(node.right, current + 1);
    }

    deep(root, 1);

    return maxDepth;
}

module.exports = maxDepth;
