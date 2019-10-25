function mergeTwoLists(l1, l2) {
    let testHead  = {next: null};
    let current = testHead;

    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            current = current.next;
            l1 = l1.next;
        } else {
            current.next = l2;
            current = current.next;
            l2 = l2.next;
        }
    }
    
    // rest of other
    current.next = l1 || l2;

    return testHead.next;
}

module.exports = mergeTwoLists;
