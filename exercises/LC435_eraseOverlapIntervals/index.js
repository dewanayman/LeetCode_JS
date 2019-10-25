const eraseOverlapIntervals = intervals => {
    if (intervals.length === 0) return 0;

    let count = 0;

    intervals.sort((a, b) => a[0] - b[0]);

    let end = intervals[0][1];

    for (let i = 1; i < intervals.length; i++) {
        let start = intervals[i][0];
        let endInt = intervals[i][1];

        if (start < end) {
            count++;
            end = Math.min(end, endInt);
        } else {
            end = endInt;
        }
    }

    return count;
};

module.exports = eraseOverlapIntervals;
