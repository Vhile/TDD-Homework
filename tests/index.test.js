const Greet = require("../src/index");

// TESTS HERE
describe("Greeting test", () => {
    it("Greeting with no input", () => {
        expect(Greet([])).toBe("Hello, my friend.");
    });
});