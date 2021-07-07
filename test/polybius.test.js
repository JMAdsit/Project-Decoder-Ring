const expect = require("chai").expect; 
const polybius = require("../src/polybius");

describe("polybius", () => {
    it("returns false if decode phrase is an odd number of (non-space) characters", () => {
        const input = "1412 412";
        const encode = false;
        let actual = polybius.polybius(input, encode);
        expect(actual).to.be.false;
    })
    it("returns the correct numeric code for input", () => {
        const input = "aBi";
        const encode = true;
        const expected = "112142";
        let actual = polybius.polybius(input, encode);
        expect(actual).to.equal(expected);
    })
    it("keeps spaces and special characters", () => {
        const input = "Kr La!";
        const encode = true;
        const expected = "5224 1311!";
        let actual = polybius.polybius(input, encode);
        expect(actual).to.equal(expected);
    })
    it("handles special case of 'j'", () => {
        const input = "jis";
        const encode = true;
        const expected = "424234";
        let actual = polybius.polybius(input, encode);
        expect(actual).to.equal(expected);
    })
    it("decodes messages", () => {
        const input = "1121";
        const encode = false;
        const expected = "ab";
        let actual = polybius.polybius(input, encode);
        expect(actual).to.equal(expected);
    })
    it("maintains spaces in code when decoding", () => {
        const input = "11 31";
        const encode = false;
        const expected = "a c";
        let actual = polybius.polybius(input, encode);
        expect(actual).to.equal(expected); 
    })
    it("handles i/j correctly when decoding", () => {
        const input = "524213";
        const encode = false;
        const expected = "k(i/j)l";
        let actual = polybius.polybius(input, encode);
        expect(actual).to.equal(expected);
    })
})