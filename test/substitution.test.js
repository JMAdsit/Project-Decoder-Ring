const expect = require("chai").expect; 
const substitution = require("../src/substitution");

describe("substitution", () => {
    it("returns false if the alphabet is too short", () => {
        const input = "asdf";
        const alphabet = "qwertyuiop";
        const encode = true;
        let actual = substitution.substitution(input, alphabet, encode);
        expect(actual).to.be.false;
    })
    it("returns false if the characters in the alphabet aren't unique", () => {
        const input = "qwerty";
        const alphabet = "qwertyuiopasdfghjklzxcvbnq";
        const encode = true;
        let actual = substitution.substitution(input, alphabet, encode);
        expect(actual).to.be.false;
    })
    it("encrypts one word", () => {
        const input = "duck";
        const alphabet = "bcdefghijklmnopqrstuvwxyza";
        const encode = true;
        let actual = substitution.substitution(input, alphabet, encode);
        let expected = "evdl";
        expect(actual).to.equal(expected);
    })
    it("encrypts words with spaces and special characters", () => {
        const input = "two words!";
        const alphabet = "bcdefghijklmnopqrstuvwxyza";
        const encode = true;
        let actual = substitution.substitution(input, alphabet, encode);
        let expected = "uxp xpset!";
        expect(actual).to.equal(expected); 
    })
    it("decrypts a word", () => {
        const input = "evdl";
        const alphabet ="bcdefghijklmnopqrstuvwxyza";
        const encode = false;
        let actual = substitution.substitution(input, alphabet, encode);
        let expected = "duck";
        expect(actual).to.equal(expected);
    })
    it("decrypts a word with spaces and special characters", () => {
        const input = "uxp xpset!";
        const alphabet = "bcdefghijklmnopqrstuvwxyza";
        const encode = false;
        let actual = substitution.substitution(input, alphabet, encode);
        let expected = "two words!";
        expect(actual).to.equal(expected); 
    })
    it("decrypts a word with an alphabet that includes special characters", () => {
        const input = "ev#l";
        const alphabet = "bc#efghijklmnopqrstuvwxyza";
        const encode = false;
        let actual = substitution.substitution(input, alphabet, encode);
        let expected = "duck";
        expect(actual).to.equal(expected); 
    })
})
