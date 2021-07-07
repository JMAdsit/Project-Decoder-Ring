const expect = require("chai").expect; 
const caesar = require("../src/caesar");

describe("caesar", () => {
    it("returns false when the shift value is unusable", () => {
        const input = "thing";
        const shift = -34;
        let actual = caesar.caesar(input, shift);
        expect(actual).to.be.false;
    })
    it("returns letters shifted forward", () => {
        const input = "ABc";
        const shift = 3;
        const expected = "def";
        let actual = caesar.caesar(input, shift);
        expect(actual).to.equal(expected);
    })
    it("returns letters shifted forward, including wrapping z to a", () => {
        const input = "abc";
        const shift = -3;
        const expected = "xyz";
        let actual = caesar.caesar(input, shift);
        expect(actual).to.equal(expected);
    })
    it("maintains spaces and punctuation in messages", () => {
        const input = "a b a!";
        const shift = 1;
        const expected = "b c b!";
        let actual = caesar.caesar(input, shift);
        expect(actual).to.equal(expected); 
    })
    it("decodes messages", () => {
        const input = "def";
        const shift = 3;
        const encode = false;
        const expected = "abc";
        let actual = caesar.caesar(input, shift, encode);
        expect(actual).to.equal(expected);
    })
})

