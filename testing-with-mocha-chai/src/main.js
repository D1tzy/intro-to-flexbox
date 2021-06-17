const input = [
    {name: "Shane", score: 9.5},
    {name: "Rebecaa", score: 8.7},
    {name: "Catarina", score: 9.7},
]
function averageScore(students) {
    let totalScore = 0;
    for (let i = 0; i < students.length; i++) {
        totalScore += students[i].score;
    }
  return Number((totalScore / students.length).toFixed(1));
}

averageScore(input);

module.exports = averageScore;