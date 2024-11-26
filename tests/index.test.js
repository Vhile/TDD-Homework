const Greet = require("../src/index");

// TESTS HERE
describe("Greeting test", () => {
    it("Greeting with no input", () => {
        expect(Greet([])).toBe("Hello, my friend.");
    });
    it("Greeting with a single input", () => {
        expect(Greet(["Bob"])).toBe("Hello Bob.");
    });
});