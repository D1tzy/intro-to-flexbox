const expect = require("chai").expect;
const averageScore = require("../src/main.js");



describe("averageScore", () => {
    it("should return the average of all users", () => {
        const input = [
            {name: "Shane", score: 9.5},
            {name: "Rebecaa", score: 8.7},
            {name: "Catarina", score: 9.7},
        ]
        
        const expected = 9.3;
        const actual = averageScore(input);
        expect(actual).to.equal(expected);
    });
});