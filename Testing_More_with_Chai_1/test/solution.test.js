const expect = require("chai").expect
const findStudentByName = require("../src/solution.js")
const input = [
    {name: "Leo Yeon-Joo", score: 8.9},
    {name: "Morgan Sutton", score: 7.4},
    {name: "Natalee Vargas", score: 9.2},
  ];

describe("incorrect student name", () => {
  it("should return null if a bad student name is given", () => {
    const expected = null
    const actual = findStudentByName(input, "Hayden Quale");
    expect(actual).to.equal(expected);
  })
})

describe("correct student name", () => {
  it("should return the full object name if a correct student name is passed", () => {
    const expected = {name: "Morgan Sutton", score: 7.4};
    const actual = findStudentByName(input, "Morgan Sutton");
    expect(actual).to.equal(expected);
  })
})