function maxDepth(root) {

    let maxDepth = 0;

    function deep(node, current) {
        if (!node && (current - 1) > maxDepth) {
            maxDepth = current - 1;
            return;
        } else {
            return;
        }

        deep(node.left, current);
        deep(node.right, current);
    }

    deep(node, 1);

    return maxDepth;
}

module.exports = maxDepth;
