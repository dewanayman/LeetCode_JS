function removeNthFromEnd(head, n) {
    let testHead = {next: head}
    let fast = testHead;
    let slow = testHead;

    //move fast
    for (let i = 0; i <= n; i++){
        fast = fast.next;
    }

    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }

    slow.next = slow.next.next;

    return testHead.next;
}

module.exports = removeNthFromEnd;
