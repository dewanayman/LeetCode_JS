// Given an array of meeting time intervals consisting of start and end
// times [s1, e1], [s2, e2], ... , determine if a person could attend all meetings.
// ---------------------------
// canAttendMeetings([[0, 30], [5, 10], [15, 20]]) --> false
// canAttendMeetings([[7, 10], [2, 4]]) --> true

const canAttendMeetings = intervals => {
    let start = [];
    let end = [];

    for (let i = 0; i < intervals.length; i++) {
        let meeting = intervals[i];

        start.push(meeting[0]);
        end.push(meeting[1]);
    }

    start.sort((a, b) => a - b);
    end.sort((a,b) => a - b);

    for (let j = 0; j < start.length; j++) {
        if (start[j + 1] < end[j]) return false;
    }

    return true;
};

module.exports = canAttendMeetings;
